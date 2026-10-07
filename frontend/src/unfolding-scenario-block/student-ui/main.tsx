import {
  createXBlockRoot,
  type XBlockConfig,
  type XBlockRuntime,
} from '@opencraft/xblock-react-utils';
import type { Data } from '../apiTypes.ts';
import { App } from './App.tsx';
import styles from './main.scss?inline';

export const renderBlock = async (
  runtime: XBlockRuntime,
  element: Element,
  context: { data: Data; config: XBlockConfig },
) => {
  // The theme urls must be retrieved and passed along here,
  // because they need to be injected into the interactive activity that is opened in a new window.
  const themeUrls = await getThemes(context.config.mfe_config_api);
  createXBlockRoot({ runtime, element, config: context.config, styles })(
    <App data={context.data} themeUrls={themeUrls} cssContent={styles} />,
  );
};

interface ThemeUrls {
  core: {
    urls: {
      default: string;
      brandOverride: string;
    };
  };
  default: {
    light: string;
    [key: string]: string;
  };
  variants: {
    [key: string]: {
      urls: {
        brandOverride: string;
      };
    };
  };
}

/**
 * Adapted from https://gitlab.com/opencraft/dev/xblock-react-utils/-/blob/4868385cb522ea9a57a8be89fcb9e8d1700da3bc/src/utils.tsx#L82
 * Fetches Paragon theme stylesheet URLs from the MFE config API.
 * Returns `core` and `theme` themes in a single array ordered by precedence,
 * each combining the CDN default with an optional brand-override URL
 * pulled from PARAGON_THEME_URLS in the config response.
 * Falls back to CDN-only URLs if the fetch fails.
 */
const getThemes = async (mfe_config_api_url: string) => {
  let themeUrls: ThemeUrls | Record<string, never> = {};
  try {
    const response = await fetch(mfe_config_api_url);
    const mfeConfig = await response.json();
    themeUrls = mfeConfig.PARAGON_THEME_URLS;
  } catch (error) {
    console.error('Failed to fetch theme URLs:', error);
  }

  const variant = themeUrls?.['default']?.['light'];

  // Order is significant!
  return [
    // core theme urls
    'https://cdn.jsdelivr.net/npm/@openedx/paragon@23/dist/core.min.css',
    themeUrls?.['core']?.['urls']?.['brandOverride'],
    // light theme urls
    'https://cdn.jsdelivr.net/npm/@openedx/paragon@23/dist/light.min.css',
    themeUrls?.['variants']?.[variant]?.['urls']?.['brandOverride'],
  ].filter(Boolean);
};

import React, { type CSSProperties, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import type { XBlockRuntime } from '../types.ts';
import { RuntimeContext } from './context.ts';

type JsrtFields = Record<`_jsrt${string}`, unknown>;

const copyJsrtFields = (target: Element, source: unknown): void => {
  if (source === null || source === undefined) return;
  if (typeof source !== 'object' && typeof source !== 'function') return;
  for (const key of Object.getOwnPropertyNames(source)) {
    if (key.startsWith('_jsrt')) {
      const jsrtKey = key as `_jsrt${string}`;
      (target as Element & JsrtFields)[jsrtKey] = (source as JsrtFields)[
        jsrtKey
      ];
    }
  }
};

export const deriveColor = (name: string, value: string): CSSProperties => {
  if (!value) {
    return {};
  }
  // Yes, some values would work here that aren't supported (i.e. #fff, rgb(0, 10, 20))
  // We don't care. We're not using them.
  if (value.match(/^#([0-9]|[a-f]){6}$/i)) {
    return { color: value };
  }
  console.error(`Bogus color found for ${name}: ${value}`);
  return {};
};

export const getRoot = (element: Element | JQuery<Element> | null): Element => {
  const container: Element | null =
    element && 'jquery' in element ? (element as JQuery<Element>)[0] : element;

  if (!container || !(container instanceof Element)) {
    console.error('Invalid DOM element provided to renderBlock:', element);
    throw new Error('Invalid DOM Element. See previously logged details.');
  }
  // xblock runtime in iframe injects runtime fields (prefixed with _jsrt) into
  // DOM elements. Copy all such fields from source(s) to container so they're
  // available on the extracted raw element.
  // https://raw.githubusercontent.com/openedx/edx-platform/4ba769509c957503c3b78f25a64cc2cf9646e157/common/templates/xblock_v2/xblock_iframe.html
  copyJsrtFields(container, element);
  return container;
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

const getThemes = async () => {
  let themeUrls: ThemeUrls | Record<string, never> = {};
  try {
    const response = await fetch('/api/mfe_config/v1');
    const mfeConfig = await response.json();
    themeUrls = mfeConfig.PARAGON_THEME_URLS;
  } catch (error) {
    console.error('Failed to fetch theme URLs:', error);
  }
  const variant = themeUrls?.['default']?.['light'];
  const theme: string[] = [
    'https://cdn.jsdelivr.net/npm/@openedx/paragon@23/dist/light.min.css',
    themeUrls?.['variants']?.[variant]?.['urls']?.['brandOverride'],
  ].filter(Boolean);
  const core = [
    'https://cdn.jsdelivr.net/npm/@openedx/paragon@23/dist/core.min.css',
    themeUrls?.['core']?.['urls']?.['brandOverride'],
  ].filter(Boolean);

  return { core, theme };
};

const ENABLE_SHADOW_ROOT = false;
// Re: The Shadow DOM
// The Shadow DOM allows us to isolate the XBlock from the rest of the page. Any
// Stylesheets we attach inside it will not affect outside content, and any outside
// styling will leak inside it. However,  for this to work all the styling need to be
// inside the Shadow DOM.
// There are currently a few issues with this which is why it's disabled:
// - Paragon CSS doesn't use the :host selector for variables.
// - Variables scoped to :root will only work inside the Shadow DOM if included
//   in a stylesheet outside the Shadow DOM. If loaded inside the Shadow DOM,
//   they will not be available.
// - Variables scoped to :host will work inside the Shadow DOM if the stylesheet
//   is loaded inside the Shadow DOM. PR here: https://github.com/openedx/paragon/pull/4282
// So we temporarily need to load the Paragon CSS both inside and outside the Shadow DOM.

export const createXBlockRoot =
  (
    runtime: XBlockRuntime,
    element: Element | JQuery<Element> | null,
    styles?: string,
  ) =>
  async (children: React.ReactNode) => {
    const { core, theme } = await getThemes();
    const rootElement = getRoot(element);
    let shadowRoot = null;
    let root = rootElement;
    if (ENABLE_SHADOW_ROOT) {
      shadowRoot = rootElement.attachShadow({ mode: 'open' });
      root = document.createElement('div');
      shadowRoot.appendChild(root);
    }
    if (styles) {
      const style = document.createElement('style');
      style.textContent = styles;
      if (shadowRoot) {
        shadowRoot.appendChild(style);
      } else {
        document.head.appendChild(style);
      }
    }
    core.forEach((url) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      shadowRoot?.appendChild(link);
      if (!document.head.querySelector(`link[href="${url}"]`)) {
        document.head.appendChild(link.cloneNode());
      }
    });
    theme.forEach((url) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      shadowRoot?.appendChild(link);
      if (!document.head.querySelector(`link[href="${url}"]`)) {
        document.head.appendChild(link.cloneNode());
      }
    });
    createRoot(root).render(
      <StrictMode>
        <RuntimeContext.Provider value={{ runtime, element: rootElement }}>
          <IntlProvider locale="en">{children}</IntlProvider>
        </RuntimeContext.Provider>
      </StrictMode>,
    );
  };

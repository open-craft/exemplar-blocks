import { type ReactNode, StrictMode } from 'react';
import { IntlProvider } from 'react-intl';
import { render } from '@testing-library/react';
import { type CoverBlockFields, Variant, ImagePosition } from '../apiTypes.ts';

export const initDataFactory = (
  overrides?: Partial<CoverBlockFields>,
): CoverBlockFields => {
  return {
    display_name: 'Cover',
    description: 'This is descriptive text',
    description_color: '#ffffff',
    main_header: 'This is the main header.',
    main_header_color: '#ababab',
    media_alt_text: 'Example media',
    media_url: 'https://example.com/example.png',
    subheader: 'Subheader Text',
    subheader_color: '#cccccc',
    top_header: 'Section N',
    top_header_color: '#dddddd',
    image_position: ImagePosition.right,
    variant: Variant.course,
    ...overrides,
  };
};

export const specRender = (component: ReactNode) => {
  return render(
    <StrictMode>
      <IntlProvider locale="en">{component}</IntlProvider>
    </StrictMode>,
  );
};

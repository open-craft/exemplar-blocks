import type { CoverStyleSet } from '../types.ts';
import { deriveColor } from '../../lib/utils.tsx';
import type { CoverBlockFields } from '../apiTypes.ts';

export const deriveStyles = (data: CoverBlockFields): CoverStyleSet => {
  return {
    top_header: deriveColor('top_header', data.top_header_color),
    description: deriveColor('description', data.description_color),
    main_header: deriveColor('main_header', data.main_header_color),
    subheader: deriveColor('subheader', data.subheader_color),
  };
};

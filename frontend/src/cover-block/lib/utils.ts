import type { CoverStyleSet, InitData } from '../types.ts';
import { deriveColor } from '../../lib/utils.ts';

export const deriveStyles = (data: InitData): CoverStyleSet => {
  return {
    top_header: deriveColor('top_header', data.top_header_color),
    description: deriveColor('description', data.description_color),
    main_header: deriveColor('main_header', data.main_header_color),
    subheader: deriveColor('subheader', data.subheader_color),
  };
};

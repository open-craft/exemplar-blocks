import type { CSSProperties } from 'react';

type Variants = {
  SECTION: 'section';
  COURSE: 'course';
  SEPARATOR: 'separator';
};

export type Variant = Variants[keyof Variants];

export interface CoverStyleSet {
  top_header: CSSProperties;
  main_header: CSSProperties;
  subheader: CSSProperties;
  description: CSSProperties;
}

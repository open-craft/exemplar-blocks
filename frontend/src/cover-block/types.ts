import type { CSSProperties } from 'react';

type Variants = {
  SECTION: 'section';
  COURSE: 'course';
  SEPARATOR: 'separator';
};

export type Variant = Variants[keyof Variants];

export interface InitData {
  display_name: string;
  variant: Variant;
  top_header: string;
  top_header_color: string;
  main_header: string;
  main_header_color: string;
  subheader: string;
  subheader_color: string;
  description: string;
  description_color: string;
  media_url: string;
  media_alt_text: string;
}

export interface CoverStyleSet {
  top_header: CSSProperties;
  main_header: CSSProperties;
  subheader: CSSProperties;
  description: CSSProperties;
}

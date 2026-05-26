/* tslint:disable */
/* eslint-disable */
/**
/* This file was automatically generated from pydantic models by running pydantic2ts.
/* Do not modify it by hand - just update the pydantic models and then re-run the script
*/

/**
 * Fields for the Cover block.
 */
export interface CoverBlockFields {
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
  image_position?: ImagePosition;
}

export const enum Variant {
  section = "section",
  course = "course",
  separator = "separator"
}
export const enum ImagePosition {
  left = "left",
  right = "right"
}

/* tslint:disable */
/* eslint-disable */
/**
/* This file was automatically generated from pydantic models by running pydantic2ts.
/* Do not modify it by hand - just update the pydantic models and then re-run the script
*/

export interface CardData {
  id: number;
  name?: string;
  title: string;
  subtitle?: string;
  description?: string;
  ctaLink?: string;
  ctaLabel?: string;
  cardType: CardType;
  secondaryContent: HoverListData | ImageData | RichListData | ContentHighlightData | null;
}
export interface HoverListData {
  items: HoverListItem[];
}
export interface HoverListItem {
  description: string;
  hoverContent?: string;
  icon?: string;
}
export interface ImageData {
  location: string;
  altText: string;
}
export interface RichListData {
  items: RichListItem[];
}
export interface RichListItem {
  icon: string;
  title: string;
  description: string;
}
export interface ContentHighlightData {
  title: string;
  subtitle: string;
  description: string;
}
export interface InitData {
  cards: CardData[];
  displayName: string;
  orientation: Orientation;
  disableNumbering?: boolean;
}

export const enum CardType {
  UNKNOWN = "UNKNOWN",
  IMAGE = "IMAGE",
  CONTENT_HIGHLIGHT = "CONTENT_HIGHLIGHT",
  RICH_LIST = "RICH_LIST",
  HOVER_LIST = "HOVER_LIST"
}
export const enum Orientation {
  HORIZONTAL = "HORIZONTAL",
  VERTICAL = "VERTICAL"
}

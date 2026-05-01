/* tslint:disable */
/* eslint-disable */
/**
/* This file was automatically generated from pydantic models by running pydantic2ts.
/* Do not modify it by hand - just update the pydantic models and then re-run the script
*/

/**
 * Layout of the card's primary and secondary contents.
 */
export type Orientation = "HORIZONTAL" | "VERTICAL";
/**
 * The different variants of the content the cards support.
 */
export type CardType = "IMAGE" | "CONTENT_HIGHLIGHT" | "RICH_LIST" | "HOVER_LIST";

/**
 * Model that defines the primary and secondary content of a card.
 */
export interface CardData {
  id: number;
  name: string;
  title: string;
  subtitle?: string;
  description?: string;
  ctaLabel?: string;
  ctaLink?: string;
  secondaryContent: HoverListData | ImageData | RichListData | ContentHighlightData | null;
}
/**
 * The secondary content that renders into an interactive list of items
 * which show different content when "hovered" (or tapped) with the mouse.
 */
export interface HoverListData {
  kind?: "HOVER_LIST";
  items: HoverListItem[];
}
/**
 * Defines each item in a HOVER_LIST card.
 */
export interface HoverListItem {
  description: string;
  hoverContent?: string;
  icon?: string;
}
/**
 * The secondary content that just shows an image for half the card.
 */
export interface ImageData {
  kind?: "IMAGE";
  location: string;
  altText: string;
}
/**
 * The secondary content that renders into a "rich list" with icon, title and
 * description.
 */
export interface RichListData {
  kind?: "RICH_LIST";
  items: RichListItem[];
}
/**
 * Defines each item in a RICH_LIST card.
 */
export interface RichListItem {
  icon: string;
  title: string;
  description: string;
}
/**
 * The secondary content used to showcase a specific content like a section,
 * or unit using just text hightlights.
 */
export interface ContentHighlightData {
  kind?: "CONTENT_HIGHLIGHT";
  title: string;
  subtitle: string;
  description: string;
}
/**
 * Model that defines the complete data that's passed to the frontend.
 */
export interface InitData {
  cards: CardData[];
  displayName: string;
  orientation: Orientation;
  disableNumbering?: boolean;
}
/**
 * This models is neither required nor used anywhere. But this helps in preserving
 * the CardType enum when pydantic2ts generates the frontend types.
 */
export interface UnknownData {
  kind: CardType;
}

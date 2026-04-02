export enum Orientation {
  HORIZONTAL = 'HORIZONTAL',
  VERTICAL = 'VERTICAL',
}

export interface InitData {
  cards: Array<CardData>;
  displayName: string;
  orientation: Orientation;
  disableNumbering?: boolean;
}

export enum CardType {
  IMAGE = 'IMAGE',
  CONTENT_HIGHLIGHT = 'CONTENT_HIGHLIGHT',
  RICH_LIST = 'RICH_LIST',
  HOVER_LIST = 'HOVER_LIST',
}

export type ContentHighlightData = {
  title: string;
  subtitle: string;
  description: string;
};

type RichListItem = {
  icon: string;
  title: string;
  description: string;
};

export type RichListData = {
  items: Array<RichListItem>;
};

type HoverListItem = {
  description: string;
  hoverContent: string;
  icon?: string;
};

export type HoverListData = {
  items: Array<HoverListItem>;
};

export type ImageData = {
  location: string;
  altText: string;
};

export interface CardData {
  title: string;
  subtitle?: string;
  description?: string;
  ctaLink?: string;
  ctaLabel?: string;
  cardType: CardType;
  secondaryContent:
    | ContentHighlightData
    | RichListData
    | HoverListData
    | ImageData;
}

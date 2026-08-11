/*
 * IMPORTANT:
 * These types should be in sync with the Pydantic Models in src/card_carousel/types.py
 *
 **/
import type { CardData, Orientation } from '../common/types';

export interface CarouselCardData extends CardData {
  orientation: Orientation;
}

/**
 * Model that defines the complete data that's passed to the frontend.
 */
export interface InitData {
  cards: CarouselCardData[];
  displayName: string;
  disableNumbering?: boolean;
  backgroundColor?: string;
}

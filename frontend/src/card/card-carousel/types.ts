/*
 * IMPORTANT:
 * These types should be in sync with the Pydantic Models in src/card_carousel/types.py
 *
 **/
import type { CardData, Orientation } from '../common/types';

/**
 * Model that defines the complete data that's passed to the frontend.
 */
export interface InitData {
  cards: CardData[];
  displayName: string;
  orientation: Orientation;
  disableNumbering?: boolean;
  backgroundColor?: string;
}

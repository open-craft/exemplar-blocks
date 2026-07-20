/*
 * IMPORTANT:
 * These types should be in sync with the Pydantic Models in src/card_grid_block/types.py
 *
 **/
import type { CardData, Orientation } from '../common/types';

export interface InitData {
  cards: CardData[];
  displayName: string;
  description: string;
  orientation: Orientation;
  backgroundColor: string;
  footerDescription: string;
}

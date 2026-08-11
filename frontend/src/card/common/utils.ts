import { type CardData } from './types';

export function newCard<T extends object = Record<string, never>>(
  cards: Array<CardData> = [],
  overrides?: T,
): CardData & T {
  const newId = cards.length ? Math.max(...cards.map((c) => c.id)) + 1 : 1;
  return {
    id: newId,
    name: `Card #${newId}`,
    title: '',
    subtitle: '',
    secondaryContent: null,
    ...overrides,
  } as CardData & T;
}

import { type CardData, CardType } from '../types';

export function newCard(cards: Array<CardData> = []): CardData {
  const newId = cards.length ? Math.max(...cards.map((c) => c.id)) + 1 : 1;
  return {
    id: newId,
    name: `Card #${newId}`,
    title: '',
    subtitle: '',
    cardType: CardType.UNKNOWN,
    secondaryContent: null,
  };
}

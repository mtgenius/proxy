import { reducers } from 'reactn';
import Card from './card';

reducers.addCard = state => {
  let key = Date.now();
  const cardKey = c => c.key === key;
  while (state.cards.findIndex(cardKey) !== -1) {
    key++;
  }
  return {
    ...state,
    cards: [
      ...state.cards,
      new Card(key)
    ]
  };
};

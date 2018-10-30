import { addReducer, setGlobal } from 'reactn';

setGlobal({
  cards: [],
  searchedCards: Object.create(null)
});

// Add a Card
const BLANK_CARD = Object.create(null);
addReducer('addCard', (state, card = BLANK_CARD) => {

  // Generate a unique ID for this card.
  let id = Date.now();
  const cardId = c => c.id === id;
  while (state.cards.findIndex(cardId) !== -1) {
    id++;
  }

  // Return a global state that contains this new card.
  return {
    ...state,
    cards: [
      ...state.cards,
      {
        id,
        ...card
      }
    ]
  };
});

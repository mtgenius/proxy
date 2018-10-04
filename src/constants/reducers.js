import { reducers } from 'reactn';

reducers.init({
  cards: [],
  searchedCards: Object.create(null)
});

// Add a Card
const NO_CARD = Object.create(null);
reducers.addCard = (state, card = NO_CARD) => {
  let id = Date.now();
  const cardId = c => c.id === id;
  while (state.cards.findIndex(cardId) !== -1) {
    id++;
  }
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
};

// Remove a Card
reducers.removeCard = (state, id) => {
  const cardId = c => c.id === id;
  const index = state.cards.findIndex(cardId);
  if (index === -1) {
    throw new Error(`Card ID ${id} cannot be found.`);
  }
  return {
    ...state,
    cards:
      state.cards.slice(0, index)
      .concat(
        state.cards.slice(index + 1, state.cards.length + 1)
      )
  };
};

// Search for a Card
reducers.searchCard = (state, search) => {
  if (Object.prototype.hasOwnProperty.call(state.searchedCards, search)) {
    return null;
  }
  return fetch(process.env.REACT_APP_MTGJSON_API + '?q=' + encodeURIComponent(search))
    .then(response => response.json())
    .catch(err => err.message)
    .then(final => ({
      ...state,
      searchedCards: {
        ...state.searchedCards,
        [search]: final
      }
    }));
};

// Update a Card
reducers.updateCard = (state, id, card) => {
  const cardId = c => c.id === id;
  const index = state.cards.findIndex(cardId);
  if (index === -1) {
    throw new Error(`Card ID ${id} cannot be found.`);
  }
  return {
    ...state,
    cards:
      state.cards.slice(0, index)
      .concat([
        {
          id,
          ...card
        }
      ])
      .concat(
        state.cards.slice(index + 1, state.cards.length + 1)
      )
  };
};

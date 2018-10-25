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



// Remove a Card
addReducer('removeCard', (state, id) => {

  // Find the card with the given ID.
  const cardId = c => c.id === id;
  const index = state.cards.findIndex(cardId);
  if (index === -1) {
    throw new Error(`Card ID ${id} cannot be found.`);
  }

  // Return a global state that does not contain the given card.
  return {
    ...state,
    cards:
      state.cards.slice(0, index)
      .concat(
        state.cards.slice(index + 1, state.cards.length + 1)
      )
  };
});



// Search for a Card
addReducer('searchCard', (state, search) => {

  // If we have previously searched for this string, do not change the state.
  if (Object.prototype.hasOwnProperty.call(state.searchedCards, search)) {
    return null;
  }

  // If we have not searched for this string before, ping the API for this string.
  return fetch(process.env.REACT_APP_MTGJSON_API + '?q=' + encodeURIComponent(search))

    // Parse the JSON.
    .then(response => response.json())

    // Catch any errors.
    .catch(err => err.message)

    // Finally, return a new state that contains the search results (or error) for this string.
    .then(final => ({
      ...state,
      searchedCards: {
        ...state.searchedCards,
        [search]: final
      }
    }));
});



// Update a Card
addReducer('updateCard', (state, id, card) => {

  // Find the card with the given ID.
  const cardId = c => c.id === id;
  const index = state.cards.findIndex(cardId);
  if (index === -1) {
    throw new Error(`Card ID ${id} cannot be found.`);
  }

  // Return a new state that replaces the given card with a new one.
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
});

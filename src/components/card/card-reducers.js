// Remove a card.
export const removeCardReducer = (state, id) => {

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
};

// Update a Card
export const updateCardReducer = (state, id, card) => {

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
};

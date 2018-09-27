import Card from '../constants/card';

const INITIAL_APP_STATE = {
  cards: [ ]
};

const appReducer = (state = INITIAL_APP_STATE, action) => {
  switch (action.type) {

    case 'ADD_CARD': {
      let key = Date.now();
      const cardKey = card => card.key === key;
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
    }

    default:
      return state;
  }
};

export default appReducer;

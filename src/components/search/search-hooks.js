import { useState } from 'react';
import { useGlobal } from 'reactn';

// Search for a Card
const searchCardReducer = (state, search) => {

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
};

export const useValue = (name, onResult) => {

  const searchCard = useGlobal(searchCardReducer);
  const [ value, setValue ] = useState(name);

  // When the user types a value, update the controlled component,
  //   then update the global state by fetching the search results
  //   with the global searchCard reducer.
  const handleChange = e => {
    setValue(e.target.value);

    // If the user entered anything, search for it using the API.
    if (e.target.value !== '') {
      searchCard(e.target.value.toLowerCase());
    }
  };

  // When the user selects a card, update the search box to share that card's name,
  //   then inform the parent component which card was selected.
  const handleResultSelect = card => {
    setValue(card.name);
    onResult(card);
  };

  return {
    handleChange,
    handleResultSelect,
    value
  };
};

import { useState } from 'react';

export const useValue = (name, onResult) => {

  const [ value, setValue ] = useState(name);

  // When the user types a value, update the controlled component,
  //   then update the global state by fetching the search results
  //   with the global searchCard reducer.
  const handleChange = e => {
    setValue(e.target.value);
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

import useFetch from 'fetch-suspense';
import React from 'react';
import { useGlobal } from 'reactn';
import Result from '../result/search-result';

const Results = ({ onSelect, search }) => {
  const [ searchedCards, setSearchedCards ] = useGlobal('searchedCards');

  // If the user entered something new, search for it using the API.
  if (
    search !== '' &&
    !Object.prototype.hasOwnProperty.call(searchedCards, search)
  ) {
    let response;
    try {
      response = useFetch(process.env.REACT_APP_MTGJSON_API + '?q=' + encodeURIComponent(search));
      if (typeof response === 'string') {
        response = JSON.parse(response);
      }
    }
    catch (e) {
      if (e instanceof Promise) {
        throw e;
      }
      response = e.message;
    }
    setSearchedCards({
      ...searchedCards,
      [search]: response
    });
  }

  // If the user has not searched for anything, or the API has no responded to this search,
  //    do not display results yet.
  if (
    !search ||
    !Object.prototype.hasOwnProperty.call(searchedCards, search)
  ) {
    return null;
  }

  // Grab the search result for this string from the global state.
  // If the API responded with an array of cards, display each as a Result component.
  if (Array.isArray(searchedCards[search])) {
    return searchedCards[search].map(card =>
      <Result
        key={card.multiverseid}
        onSelect={onSelect}
        {...card}
      />
    );
  }

  // If the API responded with anything other than an array, display the error.
  return (
    <div
      children={searchedCards[search]}
      className="search-error"
    />
  );
};

export default Results;

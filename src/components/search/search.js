import React from 'react';
import { useGlobal } from 'reactn';
import Result from './result/search-result';
import './search.scss';
import { useValue } from './search-hooks';

// Render a search box to find cards by name.
const Search = ({ name, onResult }, ref) => {
  const [ searchedCards ] = useGlobal('searchedCards');
  const { handleChange, handleResultSelect, value } = useValue(name, onResult);

  // Perform searches in lowercase.
  const valueToLowerCase = value.toLowerCase();
  return (
    <div className="search">
      <input
        onChange={handleChange}
        placeholder="Card Name"
        ref={ref}
        type="text"
        value={value}
      />
      {
        // Display all results from the API.

        // If the user has not searched for anything, or the API has no responded to this search,
        //    do not display results yet.
        !value ||
        !Object.prototype.hasOwnProperty.call(searchedCards, valueToLowerCase) ?
          null :

          // Grab the search result for this string from the global state.
          // If the API responded with an array of cards, display each as a Result component.
          Array.isArray(searchedCards[valueToLowerCase]) ?
            searchedCards[valueToLowerCase].map(card =>
              <Result
                key={card.multiverseid}
                onSelect={handleResultSelect}
                {...card}
              />
            ) :

            // If the API responded with anything other than an array, display the error.
            <div
              children={searchedCards[valueToLowerCase]}
              className="search-error"
            />
      }
    </div>
  );
};

export default React.forwardRef(Search);

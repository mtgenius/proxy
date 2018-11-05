import React, { useRef } from 'react';
import { useGlobal } from 'reactn';
import Search from '../search/search';
import './card.scss';
import { removeCardReducer, updateCardReducer } from './card-reducers';

/*
ReactN custom reducer hook demo
ReactN global reducer hook demo
*/

// Display a card.
const Card = ({ id, multiverseid, name, set }) => {
  const addCard = useGlobal('addCard');
  const removeCard = useGlobal(removeCardReducer);
  const searchRef = useRef(null);
  const updateCard = useGlobal(updateCardReducer);

  // When the Copy button is clicked, add a copy of this card using the global addCard reducer.
  const handleAdd = () => {
    addCard({ multiverseid, name, set });
  };

  // Automatically focus the input field.
  const handleMouseEnter = () => {
    searchRef.current.focus();
  };

  // When the user selects a search result, update this card to be the selected result
  //   by using the updateCard global reducer.
  const handleSearchResult = result => {
    updateCard(id, result);
  };

  // When the Remove button is clicked, remove this card using the global removeCard reducer.
  const handleSubtract = () => {
    removeCard(id);
  };

  return (
    <div
      className="card"
      onMouseEnter={handleMouseEnter}
    >
      {
        // If a card is selected, render it.
        multiverseid ?
          <img
            alt={name}
            className="card-image"
            height="100%"
            src={'https://i.mtgeni.us/' + multiverseid + '.png'}
            width="100%"
          /> :
          null
      }
      <span
        children="+"
        className="card-add"
        onClick={handleAdd}
        title="Copy this card."
      />
      <Search
        name={name || ''}
        onResult={handleSearchResult}
        ref={searchRef}
      />
      <span
        children="-"
        className="card-subtract"
        onClick={handleSubtract}
        title="Remove this card."
      />
    </div>
  );
};

export default Card;

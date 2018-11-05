import React from 'react';
import './search-result.scss';

/*
No ReactN demo
*/

// Render each search result.
const SearchResult = ({ multiverseid, name, onSelect, set }) => {

  // When the search result is clicked, inform the parent what card was selected.
  const handleClick = () => {
    onSelect({ multiverseid, name, set });
  };

  return (
    <div
      className="search-result"
      onClick={handleClick}
      title={name}
    >
      ({set}) {name}
    </div>
  );
};

export default SearchResult;

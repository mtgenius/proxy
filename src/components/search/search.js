import React, { Suspense } from 'react';
import Results from './results/search-results';
import './search.scss';
import { useValue } from './search-hooks';

/*
ReactN hook demo
*/

// Render a search box to find cards by name.
const Search = ({ name, onResult }, ref) => {
  const { handleChange, handleResultSelect, value } = useValue(name, onResult);

  // Perform searches in lowercase.
  return (
    <div className="search">
      <input
        onChange={handleChange}
        placeholder="Card Name"
        ref={ref}
        type="text"
        value={value}
      />
      <Suspense fallback="Loading...">
        <Results
          onSelect={handleResultSelect}
          search={value.toLowerCase()}
        />
      </Suspense>
    </div>
  );
};

export default React.forwardRef(Search);

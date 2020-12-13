import React from 'react';
import './style.scss';

function Search() {
  return (
    <div>
      <input
        type="search"
        id="search-engine"
        className="search"
        placeholder="Search"
      />
    </div>
  );
}

export default Search;

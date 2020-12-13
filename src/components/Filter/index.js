import React from 'react';
import Tags from 'services/tags';
import './style.scss';

function Filter() {
  return (
    <div className="container">
      <img alt="Filter" src="assets/filter.svg" />
      <select className="dropdown">
        {Tags.map((tag) => (
          <option className="dropdown-option">{tag}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;

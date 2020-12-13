import React from 'react';
import './style.scss';

function Sort() {
  return (
    <div className="container">
      <img alt="Sort" src="assets/order.svg" />
      <select className="dropdown" placeholder="Order voices by name">
        <option className="dropdown-option">Order by name ASC</option>
        <option className="dropdown-option">Order by name DESC</option>
      </select>
    </div>
  );
}

export default Sort;

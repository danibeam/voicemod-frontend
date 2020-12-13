import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

function Filter(props) {
  const { categories } = props;
  return (
    <div>
      <img alt="Filter" src="assets/filter.svg" />
      <select className="dropdown">
        {categories.map((category) => (
          <option>{category}</option>
        ))}
      </select>
    </div>
  );
}

Filter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Filter;

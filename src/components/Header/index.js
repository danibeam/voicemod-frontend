import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Search';
import Filter from '../Filter';
import Sort from '../Sort';
import Shuffle from '../Shuffle';

function Header(props) {
  const { text } = props;
  return (
    <div className="Header">
      {text}
      <Search />
      <Filter />
      <Sort />
      <Shuffle />
    </div>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;

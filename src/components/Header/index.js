import React from 'react';
import Filter from '../Filter';
import Search from '../Search';
import Shuffle from '../Shuffle';
import Sort from '../Sort';
import './style.scss';

function Header() {
  return (
    <div className="Header">
      <Search />
      <Filter />
      <Sort />
      <Shuffle />
    </div>
  );
}

export default Header;

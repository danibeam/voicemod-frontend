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
      <div className="Header-actions">
        <Filter />
        <Sort />
        <Shuffle />
      </div>
    </div>
  );
}

export default Header;

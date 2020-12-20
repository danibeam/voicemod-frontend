/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import './style.scss';

const Dropdown = ({ options, changeDropdown }) => {
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);
  const handleOnClick = (option) => {
    if (option.id !== selected.id) {
      setSelected(option);
    }
    setOpen(false);
  };

  useEffect(() => {
    changeDropdown(selected);
  }, [selected]);

  const toggle = () => setOpen(!open);
  return (
    <div className="dd-wrapper">
      <div
        className="dd-header"
        role="button"
        tabIndex={0}
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dd-header__title">
          <p>{selected.value}</p>
        </div>
        <div className="dd-header__action">
          <img
            className={
              open ? 'dd-header__action__close' : 'dd-header__action__open'
            }
            src="assets/select-arrow.svg"
            alt="select arrow"
          />
        </div>
      </div>
      {open && (
        <ul className="dd-list">
          {options.map((option) => (
            <li
              className="dd-list-item"
              key={option.id}
              onClick={() => handleOnClick(option)}
            >
              <span>{option.value}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  changeDropdown: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  options: [],
};

export default Dropdown;

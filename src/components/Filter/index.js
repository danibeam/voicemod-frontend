import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

function Filter(props) {
  const { tags } = props;
  return (
    <div className="container">
      <img alt="Filter" src="assets/filter.svg" />
      <select className="dropdown">
        {tags.map((tag) => (
          <option className="dropdown-option">{tag}</option>
        ))}
      </select>
    </div>
  );
}

Filter.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  tags: state.tags,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

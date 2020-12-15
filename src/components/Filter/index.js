import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from 'store/actions/actionTypes';
import './style.scss';

function Filter(props) {
  const { tags } = props;
  const { filter } = props;

  const onSelectFilter = (event) => {
    props.onFilterTriggered(event.target.value);
  };

  return (
    <div className="container">
      <img alt="Filter" src="assets/filter.svg" />
      <select
        className="dropdown"
        onChange={onSelectFilter}
        value={filter}
        placeholder="Filter voices by category"
      >
        {tags.map((tag) => (
          <option value={tag} className="dropdown-option">
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
}

Filter.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  filter: PropTypes.string,
  onFilterTriggered: PropTypes.func.isRequired,
};

Filter.defaultProps = {
  tags: [],
  filter: 'All',
};

const mapStateToProps = (state) => ({
  tags: state.tags,
  filter: state.settings.filter,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterTriggered: (payload) =>
      dispatch({
        type: actionTypes.FILTER,
        payload,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

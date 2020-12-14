import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './style.scss';
import * as actionTypes from 'store/actionTypes';

function Sort(props) {
  const { sort } = props;
  const onSelectSorter = (event) => {
    props.onSortTriggered(event.target.value);
  };
  return (
    <div className="container">
      <img alt="Sort" src="assets/order.svg" />
      <select
        onChange={onSelectSorter}
        className="dropdown"
        placeholder="Order voices by name"
        value={sort}
      >
        <option value="ASC" className="dropdown-option">
          Order by name ASC
        </option>
        <option value="DESC" className="dropdown-option">
          Order by name DESC
        </option>
      </select>
    </div>
  );
}

Sort.propTypes = {
  sort: PropTypes.string,
  onSortTriggered: PropTypes.func,
};

Sort.defaultProps = {
  sort: 'ASC',
  onSortTriggered: null,
};

const mapStateToProps = (state) => ({
  sort: state.settings.sort,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onSortTriggered: (payload) =>
      dispatch({
        type: actionTypes.SORT,
        payload,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);

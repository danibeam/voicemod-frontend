import Dropdown from 'components/Dropdown';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from 'store/actions/actionTypes';
import './style.scss';

function Sort(props) {
  const sortOptions = [
    {
      id: 1,
      value: 'ASC',
    },
    {
      id: 2,
      value: 'DESC',
    },
  ];
  const onSelectSorter = (event) => {
    props.onSortTriggered(event.value);
  };
  return (
    <div className="container">
      <img alt="Sort" src="assets/order.svg" />
      <Dropdown options={sortOptions} changeDropdown={onSelectSorter} />
    </div>
  );
}

Sort.propTypes = {
  onSortTriggered: PropTypes.func.isRequired,
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

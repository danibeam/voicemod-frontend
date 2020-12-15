import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from 'store/actions/actionTypes';
import './style.scss';

function Search(props) {
  const { search } = props;
  const onType = (event) => {
    if (event.target.value) {
      props.onTriggerSearch(event.target.value.toLowerCase());
    }
  };
  return (
    <div>
      <input
        type="search"
        id="search-engine"
        className="search"
        placeholder="Search"
        value={search}
        onChange={onType}
      />
    </div>
  );
}

Search.propTypes = {
  search: PropTypes.string,
  onTriggerSearch: PropTypes.func.isRequired,
};

Search.defaultProps = {
  search: null,
};

const mapStateToProps = (state) => ({
  search: state.search,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onTriggerSearch: (payload) =>
      dispatch({
        type: actionTypes.SEARCH,
        payload,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

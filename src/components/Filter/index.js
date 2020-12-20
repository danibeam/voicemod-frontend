import Dropdown from 'components/Dropdown';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from 'store/actions/actionTypes';
import './style.scss';

function Filter(props) {
  const { tags } = props;

  const tagOptions = tags.map((tag, index) => ({
    id: index,
    value: tag,
  }));

  const onSelectFilter = (option) => {
    props.onFilterTriggered(option.value);
  };

  return (
    <div className="container">
      <img alt="Filter" src="assets/filter.svg" />
      <Dropdown options={tagOptions} changeDropdown={onSelectFilter} />
    </div>
  );
}

Filter.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  onFilterTriggered: PropTypes.func.isRequired,
};

Filter.defaultProps = {
  tags: [],
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

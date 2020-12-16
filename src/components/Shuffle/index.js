/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from 'store/actions/actionTypes';
import PropTypes from 'prop-types';
import './style.scss';

export const Shuffle = (props) => {
  const onClickedShuffle = () => {
    props.onShuffleTriggered();
  };
  return (
    <div>
      <img
        src="/assets/button-random.svg"
        alt="Shuffle"
        title="Shuffle it!"
        className="shuffle"
        onClick={onClickedShuffle}
      />
    </div>
  );
};

Shuffle.propTypes = {
  onShuffleTriggered: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    onShuffleTriggered: () =>
      dispatch({
        type: actionTypes.SHUFFLE,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shuffle);

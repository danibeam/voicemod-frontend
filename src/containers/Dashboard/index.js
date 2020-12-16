/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import Header from 'components/Header';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from 'store/actions/actionTypes';
import './style.scss';

export const Dashboard = (props) => {
  const { filteredVoices, selected } = props;

  const onClickedVoice = (voice) => {
    props.onSelectedVoice(voice);
  };
  return (
    <>
      <Header text="Hola" />
      <div className="dashboard">
        <section>
          <h1 className="section-header">Favourite Voices</h1>
        </section>
        <section id="pro-voices">
          <h1 className="section-header">Pro Voices</h1>
          <div className="voices-wrapper">
            {filteredVoices.map((voice) => (
              <div key={voice.id} className="voice">
                <img
                  alt={voice.icon}
                  src={`/assets/${voice.icon}`}
                  onClick={() => onClickedVoice(voice)}
                  className={
                    selected && selected.id === voice.id ? 'selected' : ''
                  }
                />
                <span>{voice.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

Dashboard.propTypes = {
  filteredVoices: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.objectOf(PropTypes.object),
  onSelectedVoice: PropTypes.func.isRequired,
};

Dashboard.defaultProps = {
  filteredVoices: [],
  selected: null,
};

const mapStateToProps = (state) => ({
  filteredVoices: state.filteredVoices,
  selected: state.selected,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectedVoice: (payload) =>
      dispatch({
        type: actionTypes.SELECT,
        payload,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

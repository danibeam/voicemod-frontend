/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { ReactComponent as NonFavSvg } from 'assets/voice-favourite-off.svg';
import { ReactComponent as FavSvg } from 'assets/voice-favourite.svg';
import Header from 'components/Header';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from 'store/actions/actionTypes';
import './style.scss';

export const Dashboard = (props) => {
  const { filteredVoices, selected } = props;

  const [favs, setFavs] = useState([]);

  const onClickedVoice = (voice) => {
    props.onSelectedVoice(voice);
  };

  return (
    <>
      <Header text="Hola" />
      <div className="dashboard">
        <section>
          <h1 className="section-header">Favourite Voices</h1>
          <div className="voices-wrapper">
            {favs.map((favourite) => (
              <div key={favourite.id} id={favourite.id} className="voice">
                <img
                  alt={favourite.icon}
                  src={`/assets/${favourite.icon}`}
                  onClick={() => onClickedVoice(favourite)}
                  className={
                    selected && selected.id === favourite.id ? 'selected' : ''
                  }
                />
                <div>
                  {selected && selected.id === favourite.id ? (
                    <FavSvg
                      className="fav-icon"
                      title="Remove from the Favourites >:"
                      onClick={() =>
                        setFavs(favs.filter((fav) => fav.id !== favourite.id))
                      }
                    />
                  ) : (
                    ''
                  )}
                  {favourite.name}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="pro-voices">
          <h1 className="section-header">Pro Voices</h1>
          <div className="voices-wrapper">
            {filteredVoices.map((voice) => (
              <div key={voice.id} id={voice.id} className="voice">
                <img
                  alt={voice.icon}
                  src={`/assets/${voice.icon}`}
                  onClick={() => onClickedVoice(voice)}
                  className={
                    selected && selected.id === voice.id ? 'selected' : ''
                  }
                />

                <div>
                  {selected && selected.id === voice.id ? (
                    <NonFavSvg
                      className="fav-icon"
                      title="Give this voice a Fav!"
                      onClick={() => setFavs([...favs, voice])}
                    />
                  ) : (
                    ''
                  )}
                  {voice.name}
                </div>
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

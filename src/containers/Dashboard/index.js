/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { ReactComponent as NonFavSvg } from 'assets/voice-favourite-off.svg';
import { ReactComponent as FavSvg } from 'assets/voice-favourite.svg';
import Header from 'components/Header';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import * as actionTypes from 'store/actions/actionTypes';
import './style.scss';

export const Dashboard = (props) => {
  const { filteredVoices, filteredFavs } = props;
  const [voiceHovered, setVoiceHovered] = useState(null);

  const selectedVoice = useSelector((state) => state.selected);
  const isShuffled = useSelector((state) => state.settings.isShuffled);
  const refs = filteredVoices.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  useEffect(() => {
    if (isShuffled) {
      refs[selectedVoice.id].current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [selectedVoice]);

  const onClickedVoice = (voice) => {
    props.onSelectedVoice(voice);
  };

  const onClickFavVoice = (voice, status) => {
    if (status) {
      props.onFavVoice(voice);
    } else {
      props.onUnFavVoice(voice);
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="dashboard">
        <section>
          <h1 className="section-header">Favourite Voices</h1>
          <div className="voices-wrapper">
            {filteredFavs.map((favourite) => (
              <div
                key={favourite.id}
                id={favourite.id}
                className="voice"
                onMouseEnter={() => setVoiceHovered(favourite.id)}
                onMouseLeave={() => setVoiceHovered(null)}
              >
                {voiceHovered === favourite.id ? (
                  <FavSvg
                    className="fav-icon"
                    title="Remove from the Favourites >:"
                    onClick={() => onClickFavVoice(favourite, false)}
                  />
                ) : (
                  ''
                )}
                <img
                  alt={favourite.icon}
                  src={`/assets/${favourite.icon}`}
                  className={
                    selectedVoice && selectedVoice.id === favourite.id
                      ? 'selected'
                      : ''
                  }
                  onClick={() => onClickedVoice(favourite)}
                />
                <span
                  className={
                    selectedVoice && selectedVoice.id === favourite.id
                      ? 'voice-name-selected'
                      : 'voice-name'
                  }
                >
                  {favourite.name}
                </span>
              </div>
            ))}
          </div>
        </section>
        <section id="pro-voices">
          <h1 className="section-header">
            <span>Pro Voices</span>
          </h1>
          <div className="voices-wrapper">
            {filteredVoices.map((voice) => (
              <div
                key={voice.id}
                id={voice.id}
                ref={refs[voice.id]}
                className="voice"
                onMouseEnter={() => setVoiceHovered(voice.id)}
                onMouseLeave={() => setVoiceHovered(null)}
              >
                {voiceHovered === voice.id ? (
                  filteredFavs.some((fav) => fav.id === voice.id) ? (
                    <FavSvg
                      className="fav-icon"
                      title="Remove from the Favourites >:"
                      onClick={() => onClickFavVoice(voice, false)}
                    />
                  ) : (
                    <NonFavSvg
                      className="fav-icon"
                      title="Fav this voice!"
                      onClick={
                        voice.isFav ? '' : () => onClickFavVoice(voice, true)
                      }
                    />
                  )
                ) : (
                  ''
                )}
                <img
                  alt={voice.icon}
                  src={`/assets/${voice.icon}`}
                  onClick={() => onClickedVoice(voice)}
                  className={
                    selectedVoice && selectedVoice.id === voice.id
                      ? 'selected'
                      : ''
                  }
                />
                <span
                  className={
                    selectedVoice && selectedVoice.id === voice.id
                      ? 'voice-name-selected'
                      : 'voice-name'
                  }
                >
                  {voice.name}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  filteredVoices: PropTypes.arrayOf(PropTypes.object),
  filteredFavs: PropTypes.arrayOf(PropTypes.object),
  onSelectedVoice: PropTypes.func.isRequired,
  onFavVoice: PropTypes.func.isRequired,
  onUnFavVoice: PropTypes.func.isRequired,
};

Dashboard.defaultProps = {
  filteredVoices: [],
  filteredFavs: [],
};

const mapStateToProps = (state) => ({
  filteredVoices: state.filteredVoices,
  filteredFavs: state.filteredFavs,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectedVoice: (payload) =>
      dispatch({
        type: actionTypes.SELECT,
        payload,
      }),
    onFavVoice: (payload) =>
      dispatch({
        type: actionTypes.SET_FAV,
        payload,
      }),
    onUnFavVoice: (payload) =>
      dispatch({
        type: actionTypes.SET_UNFAV,
        payload,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

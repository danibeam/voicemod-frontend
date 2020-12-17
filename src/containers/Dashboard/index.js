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
  const { filteredVoices, selected } = props;

  const [favs, setFavs] = useState([]);
  const [voiceHovered, setVoiceHovered] = useState(null);

  const selectedVoice = useSelector((state) => state.selected);
  const isShuffled = useSelector((state) => state.settings.isShuffled);
  const refs = filteredVoices.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  useEffect(() => {
    if (isShuffled) {
      refs[selected.id].current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [selectedVoice]);

  const onClickedVoice = (voice) => {
    props.onSelectedVoice(voice);
  };

  return (
    <div className="container">
      <Header />
      <div className="dashboard">
        <section>
          <h1 className="section-header">Favourite Voices</h1>
          <div className="voices-wrapper">
            {favs.map((favourite) => (
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
                    onClick={() =>
                      setFavs(favs.filter((fav) => fav.id !== favourite.id))
                    }
                  />
                ) : (
                  ''
                )}
                <img
                  alt={favourite.icon}
                  src={`/assets/${favourite.icon}`}
                  className={
                    selected && selected.id === favourite.id ? 'selected' : ''
                  }
                  onClick={() => onClickedVoice(favourite)}
                />
                <span
                  className={
                    selected && selected.id === favourite.id
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
                  favs.some((fav) => fav.id === voice.id) ? (
                    <FavSvg
                      className="fav-icon"
                      title="Remove from the Favourites >:"
                      onClick={() =>
                        setFavs(favs.filter((fav) => fav.id !== voice.id))
                      }
                    />
                  ) : (
                    <NonFavSvg
                      className="fav-icon"
                      title="Fav this voice!"
                      onClick={() =>
                        favs.some((fav) => fav.id === voice.id)
                          ? ''
                          : setFavs([...favs, voice])
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
                    selected && selected.id === voice.id ? 'selected' : ''
                  }
                />
                <span
                  className={
                    selected && selected.id === voice.id
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

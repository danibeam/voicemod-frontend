/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Footer from 'components/Footer';
import Header from 'components/Header';
import './style.scss';

export const Dashboard = (props) => {
  const { voices } = props;
  return (
    <>
      <Header text="Hola" />
      <div className="dashboard">
        <h1>Hey, Dashboard!</h1>
        <div className="voices-wrapper">
          {voices.map((voice) => (
            <div className="voice">
              <img alt={voice.icon} src={`/assets/${voice.icon}`} />
              <span>{voice.name}</span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

Dashboard.propTypes = {
  voices: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  voices: state.voices,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

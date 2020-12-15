import Header from 'components/Header';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

export const Dashboard = (props) => {
  const { filteredVoices } = props;
  return (
    <>
      <Header text="Hola" />
      <div className="dashboard">
        <h1>Hey, Dashboard!</h1>
        <div className="voices-wrapper">
          {filteredVoices.map((voice) => (
            <div className="voice">
              <img alt={voice.icon} src={`/assets/${voice.icon}`} />
              <span>{voice.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

Dashboard.propTypes = {
  filteredVoices: PropTypes.arrayOf(PropTypes.object),
};

Dashboard.defaultProps = {
  filteredVoices: [],
};

const mapStateToProps = (state) => ({
  filteredVoices: state.filteredVoices,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

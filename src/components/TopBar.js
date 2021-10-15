import React from 'react';
import PropTypes from 'prop-types';
import Back from './Back';

export default function TopBar(props) {
  const { region } = props;
  return (
    <div className="d-flex flex-row justify-content-between">
      <div>{region ? <Back /> : 2021}</div>
      <div>
        {region ? `Covid Metrics for ${region}` : 'Covid Metrics for Spain'}
      </div>
      <div>
        <span className="icons">
          {' '}
          <i className="fas fa-microphone" />
        </span>
        <span className="icons"><i className="fas fa-cog" /></span>
      </div>
    </div>
  );
}

TopBar.propTypes = {
  region: PropTypes.string,
};

TopBar.defaultProps = {
  region: '',
};

import React from 'react';
import PropTypes from 'prop-types';

export default function TopBar(props) {
  const { region } = props;
  return (
    <div>
      {region ? `Covid Metrics for ${region}` : 'Covid Metrics for Spain'}
    </div>
  );
}

TopBar.propTypes = {
  region: PropTypes.string,
};

TopBar.defaultProps = {
  region: '',
};

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ percent }) => (
  <Fragment>
    <progress value={percent} max={100} />
  </Fragment>
);

ProgressBar.propTypes = {
  percent: PropTypes.number,
};

ProgressBar.defaultProps = {
  percent: 0,
};
export default ProgressBar;

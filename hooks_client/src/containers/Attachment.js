import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

const Attachment = ({ attachment }) => (
  <div>
    <Header size="h4">{`Attachment: ${attachment.name}`}</Header>
    { console.log('attach: ', attachment)}
  </div>
);

Attachment.propTypes = {
  attachment: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default Attachment;

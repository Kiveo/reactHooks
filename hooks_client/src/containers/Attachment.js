import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

const Attachment = ({ attachment }) => {
  // BEGIN FILE READER
  const imgRef = React.createRef();
  const file = attachment;
  const reader = new FileReader();
  // ? setting up progress indicator
  reader.addEventListener('progress', () => {
    console.log('fr::PROGRESS: ', attachment.name);
  }, true);

  // once finished loading
  reader.addEventListener('load', () => {
    console.log('fr::LOADED: ', attachment.name);
    imgRef.current.src = reader.result;
  }, true);
  if (file) {
    reader.readAsDataURL(file);
  }
  // END FILE READER

  // TODO preventing re-renders like this may need adjusting after progress is implemented
  useEffect(() => {
    console.log('Effected: ', attachment.name);
  }, [attachment.name]);

  // TODO implement removeAttachment
  const removeAttachment = () => {
    alert('remove attachment request');
  };

  return (
    <div>
      <Header size="h4">
        <img ref={imgRef} alt="previous" style={{ width: '50px', height: '50px' }} />
        {`Attachment: ${attachment.name}: `}
        <progress value={20} max={60} />
        <button onClick={removeAttachment} type="button">X</button>
      </Header>
    </div>
  );
};

Attachment.propTypes = {
  attachment: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default Attachment;

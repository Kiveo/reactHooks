import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

const Attachment = ({ attachment }) => {
  // ? TRY TO SET STATE TO EVENT THROTTLE IMREF FILEREADER
  const [imgRef] = useState(React.createRef());
  // const imgRef = React.createRef();

  // TODO preventing re-renders like this may need adjusting after progress is implemented
  useEffect(() => {
    console.log('Effected: ', attachment.name);
    // BEGIN FILE READER
    const file = attachment;
    const reader = new FileReader();
    // ? set up functional progress indicator
    reader.addEventListener('progress', (val) => {
      console.log('fr::PROGRESS: ', val);
    }, true);

    // once finished loading fileread, set image preview source
    reader.addEventListener('load', () => {
      imgRef.current.src = reader.result;
    }, true);
    if (file) {
      reader.readAsDataURL(file);
    }
    // END FILE READER
  }, [attachment]);

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

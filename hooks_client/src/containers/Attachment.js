import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';

const Attachment = ({ attachment, removeFile }) => {
  const [imgRef] = useState(React.createRef());
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // BEGIN FILE READER
    const file = attachment;
    const reader = new FileReader();

    // listen for progress updates
    reader.addEventListener('progress', (val) => {
      const percentage = (Math.floor(val.loaded) / val.total) * 100;
      setPercent(percentage);
    }, true);

    // once finished loading fileread, set image preview source
    reader.addEventListener('load', () => {
      if (file.type.includes('image')) { imgRef.current.src = reader.result; }
    }, true);
    if (file) {
      reader.readAsDataURL(file);
    }
    // END FILE READER
  }, [attachment, imgRef]);

  const removeAttachment = () => {
    removeFile(attachment);
  };

  return (
    <div>
      <Header size="h4">
        <img ref={imgRef} alt="Preview" style={{ width: '50px', height: '50px' }} />
        {`Attachment: ${attachment.name}: `}
        <ProgressBar percent={percent} />
        <button onClick={removeAttachment} type="button">X</button>
      </Header>
    </div>
  );
};

Attachment.propTypes = {
  attachment: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  removeFile: PropTypes.func.isRequired,
};

export default Attachment;

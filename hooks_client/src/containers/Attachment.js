import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

const Attachment = ({ attachment, removeFile }) => {
  const [imgRef] = useState(React.createRef());
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // BEGIN FILE READER
    const file = attachment;
    const reader = new FileReader();
    // ? set up functional progress indicator
    reader.addEventListener('progress', (val) => {
      // console.log(`PERCENT: ${(Math.floor(val.loaded) / val.total) * 100}%`);
      const percentage = (Math.floor(val.loaded) / val.total) * 100;
      setPercent(percentage);
    }, true);

    // once finished loading fileread, set image preview source
    reader.addEventListener('load', () => {
      imgRef.current.src = reader.result;
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
        <img ref={imgRef} alt="previous" style={{ width: '50px', height: '50px' }} />
        {`Attachment: ${attachment.name}: `}
        <progress value={percent} max={100} />
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

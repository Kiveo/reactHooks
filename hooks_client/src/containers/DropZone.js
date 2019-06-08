import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uploadIcon from '../assets/images/cloudUpload.png';

const DropZone = ({ handleFile, children }) => {
  const [fileArray, setFileArray] = useState([]);
  const [hoverState, setHoverState] = useState(false);
  const divStyle = { display: 'flex', background: 'rba(200,255,200,0.5' };
  const divStyleHover = { display: 'flex', background: 'rba(255,255,255,0.5', border: '3px dashed' };
  const imgStyle = { padding: '1em', width: '3em', height: '3em' };

  const nullifyEvent = (e) => { e.preventDefault(); setHoverState(true); };
  const handleExit = () => { setHoverState(false); };
  const handleDrop = () => { console.log('Handle DROP'); };

  return (
    <div
      style={hoverState ? divStyleHover : divStyle}
      type="file"
      role="button"
      tabIndex="-1"
      onDragOver={nullifyEvent}
      onDragLeave={handleExit}
      onClick={handleDrop}
      onKeyDown={handleDrop}
      onDrop={handleDrop}
      onDropCapture={handleExit}
    >
      <img src={uploadIcon} alt="upload icon" style={imgStyle} />
      {children}
      <input type="file" style={{ display: '', background: 'teal' }} />
    </div>
  );
};

DropZone.propTypes = {
  handleDrop: PropTypes.func.isRequired,
};

export default DropZone;

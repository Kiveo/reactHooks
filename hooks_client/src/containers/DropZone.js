import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uploadIcon from '../assets/images/cloudUpload.png';
import Attachment from './Attachment';

const DropZone = ({ handleFile, children }) => {
  const [fileArray, setFileArray] = useState([]);
  const [hoverState, setHoverState] = useState(false);
  const divStyle = { display: 'flex', background: 'rba(200,255,200,0.5' };
  const divStyleHover = { display: 'flex', background: 'rba(255,255,255,0.5', border: '3px dashed' };
  const imgStyle = { padding: '1em', width: '3em', height: '3em' };

  const inputRef = React.createRef();
  const nullifyEvent = (e) => { e.preventDefault(); setHoverState(true); };
  const handleExit = () => { setHoverState(false); };
  const handleChange = () => {
    console.log('onChange Triggered');
    setFileArray([...fileArray, inputRef.current.files]);
    if (handleFile) { handleFile(); }
  };

  return (
    <div id="DropZone">
      <div
        style={hoverState ? divStyleHover : divStyle}
        type="file"
        role="button"
        tabIndex="-1"
        onDragOver={nullifyEvent}
        onDragLeave={handleExit}
        onDropCapture={handleExit}
      >
        <img src={uploadIcon} alt="upload icon" style={imgStyle} />
        {children}
        <input type="file" ref={inputRef} onChange={handleChange} style={{ display: '', background: 'teal' }} />
      </div>
      <hr />
      { fileArray && fileArray.map((f, i) => (
        <Attachment
          key={f[0].name + i}
          attachment={f[0]}
        />
      ))
      }
    </div>
  );
};

DropZone.propTypes = {
  handleFile: PropTypes.func,
};

DropZone.defaultProps = {
  handleFile: null,
};

export default DropZone;

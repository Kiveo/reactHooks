import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uploadIcon from '../assets/images/cloudUpload.png';
import Attachment from './Attachment';

const DropZone = ({ handleFile, children }) => {
  const [fileArray, setFileArray] = useState([]);
  const [hoverState, setHoverState] = useState(false);
  const [count, setCount] = useState(0);

  const divStyle = { display: 'flex', background: 'rba(200,255,200,0.5' };
  const divStyleHover = { display: 'flex', background: 'rba(255,255,255,0.5', border: '3px dashed' };
  const imgStyle = { padding: '1em', width: '3em', height: '3em' };

  const inputRef = React.createRef();
  const nullifyEvent = (e) => { e.preventDefault(); setHoverState(true); };
  const handleExit = () => { setHoverState(false); };
  const handleClick = (e) => { inputRef.current.click(e); };
  const handleChange = () => {
    // handle events where user cancels selection
    if (!inputRef.current.files[0]) { return console.log('BREAK'); }
    // check prex-exiting file in fileArray
    if (inputRef.current.files[0] && fileArray.filter(fn => fn.name === inputRef.current.files[0].name).length >= 1) { console.log('WARNING'); return; }
    setFileArray([...fileArray, inputRef.current.files[0]]);
    // ? If user provides handleFile(), then invoke after local state set
    if (handleFile) { handleFile(); }
    return (setCount(count + 1));
  };
  // handleDrop seems similar to change, but the file source changes between input and event
  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer && e.dataTransfer.files) {
      // check for pre-exiting file in fileArray
      if ((fileArray.length > 1) && fileArray.filter(fn => fn.name === e.dataTransfer.files[0].name).length >= 1) { console.log('WARNING'); return; }
      setFileArray([...fileArray, e.dataTransfer.files[0]]);
    }
    (setCount(count + 1));
  };

  return (
    <div id="DropZone">
      <div
        style={hoverState ? divStyleHover : divStyle}
        type="file"
        role="button"
        tabIndex="-1"
        onDrop={handleDrop}
        onDragOver={nullifyEvent}
        onDragLeave={handleExit}
        onDropCapture={handleExit}
      >
        <img src={uploadIcon} alt="upload icon" style={imgStyle} />
        {children}
      </div>
      <button onClick={handleClick} type="button">Upload Image</button>
      <input type="file" ref={inputRef} onChange={handleChange} style={{ display: 'none', background: 'teal' }} />
      <hr />
      <p>{`Files Select: ${count}`}</p>
      { fileArray && fileArray.map(f => (
        <span key={f.size}>
          <Attachment
            attachment={f}
          />
          {/* // TODO Enable delete/remove selected upload (preferably after form upload ie not just selection) */}
        </span>
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

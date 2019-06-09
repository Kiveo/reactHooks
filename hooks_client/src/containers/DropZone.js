import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uploadIcon from '../assets/images/cloudUpload.png';
import Attachment from './Attachment';

// TODO add fetch/xml requests to upload/delete files on an API
const DropZone = ({ handleFile, children }) => {
  // -- State --
  const [fileArray, setFileArray] = useState([]);
  const [hoverState, setHoverState] = useState(false);
  const [count, setCount] = useState(0);
  const [warning, setWarning] = useState();
  // -- Styles --
  const divStyle = { display: 'flex', background: 'rba(200,255,200,0.5' };
  const divStyleHover = { display: 'flex', background: 'rba(255,255,255,0.5', border: '3px dashed' };
  const imgStyle = { padding: '1em', width: '3em', height: '3em' };
  // -- Events & Refs --
  const inputRef = React.createRef();
  const nullifyEvent = (e) => { e.preventDefault(); setHoverState(true); };
  const handleExit = () => { setHoverState(false); };
  const handleClick = (e) => { inputRef.current.click(e); };
  const handleChange = () => {
    // handle events where user cancels selection
    if (!inputRef.current.files[0]) { return setWarning(''); }
    // file size max: ~100mb
    if (inputRef.current.files[0].size > 123456799) { return setWarning('File is too large.'); }
    // check prex-exiting file in fileArray
    if (inputRef.current.files[0] && fileArray.filter(fn => fn.name === inputRef.current.files[0].name).length >= 1) {
      return setWarning('Warning: File already selected');
    }
    setFileArray([...fileArray, inputRef.current.files[0]]);
    // ? If user provides handleFile(), then invoke after local state set
    if (handleFile) { handleFile(); }
    return (setCount(count + 1), setWarning(null));
  };
  // handleDrop seems similar to change, but the file source changes between input and event
  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer && e.dataTransfer.files) {
      // file size max: ~100mb
      if (e.dataTransfer.files[0].size > 123456799) { return setWarning('File is too large.'); }
      // check for pre-exiting file in fileArray
      if ((fileArray.length > 1) && fileArray.filter(fn => fn.name === e.dataTransfer.files[0].name).length >= 1) {
        return setWarning('Warning: File already selected');
      }
      setFileArray([...fileArray, e.dataTransfer.files[0]]);
    }
    return (setCount(count + 1), setWarning(null));
  };
  // -- Prop & Children Functions --
  const removeFile = (item) => {
    const newArray = fileArray.filter(element => element !== item);
    setFileArray(newArray);
    setCount(count - 1);
    setWarning(null);
  };

  // -- Render --
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
      {warning && <span>{warning}</span>}
      <input type="file" ref={inputRef} onChange={handleChange} style={{ display: 'none', background: 'teal' }} />
      <hr />
      <p>{`Files Selected: ${count}`}</p>
      { fileArray && fileArray.map(f => (
        <span key={f.size}>
          <Attachment
            attachment={f}
            removeFile={removeFile}
          />
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

import React, { Fragment } from 'react';
import Header from '../components/Header';
import DropZone from './DropZone';

const DropzoneArea = () => {
  const content = (
    <Fragment>
      <Header>Dropzone</Header>
      <p>Use the dropzone below to drag and drop images</p>
      <hr />
      <div style={{ background: 'rgba(200,200,255,0.5)', border: '1px dotted green' }}>
        {/* // TODO determine best placement and use for handleFile prop, if any */}
        {/* // ? Optional handleFile() function pass to DropZone */}
        <DropZone />
      </div>
    </Fragment>
  );
  return content;
};

export default DropzoneArea;

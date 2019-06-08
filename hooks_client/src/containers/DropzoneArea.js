import React, { Fragment } from 'react';
import Header from '../components/Header';
import DropZone from './DropZone';

const DropzoneArea = () => {
  const content = (
    <Fragment>
      <Header>Dropzone</Header>
      <p>Let's mimic a drop zone</p>
      <hr />
      <div style={{ background: 'rgba(200,200,255,0.5)', border: '1px dotted green' }}>
        <DropZone
          handleDrop={() => console.log('HANDLED')}
        />
      </div>
    </Fragment>
  );
  return content;
};

export default DropzoneArea;

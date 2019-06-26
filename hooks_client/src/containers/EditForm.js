/* eslint-disable object-curly-newline */
import React, { Fragment, useState, useRef } from 'react';
import InlineEditHook from './InlineEditHook';

// -- COMPONENT --
const EditForm = () => {
// -- STATE & REF--
  const [parentState, setParentState] = useState();
  const [editMode, setEditMode] = useState(false);
  const parentRef = useRef();

  // -- HANDLERS --
  const handleSubmit = (e) => {
    e.preventDefault();
    // using ref instead of event because render drops input from component, on submit
    setParentState(parentRef.current.value);
    setEditMode(true);
  };

  // -- RENDER --
  const renderField = editMode
    ? (
      <InlineEditHook
        initialValue={parentState}
        handleConfirm={(val) => { console.log('Confirm: ', val); setParentState(val); }}
        handleChange={val => console.log('Change: ', val)}
        handleReject={val => console.log('Reject: ', val)}
      />
    ) : (
      <form onSubmit={handleSubmit} method="POST" action="/edit-form">
        <label htmlFor="firstname">
          {'Name: '}
          <input ref={parentRef} type="text" id="firstname" placeholder="Enter Name..." />
        </label>
        <button type="submit">Submit</button>
      </form>
    );

  return (
    <Fragment>
      {console.log('create mode: ', !editMode)}
      {console.log('edit mode: ', editMode)}
      <h1>Create & Edit Form</h1>
      {renderField}
    </Fragment>
  );
};

export default EditForm;

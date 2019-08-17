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
    // if not in edit mode, render a form. if in edit mode, render an inline-edit field
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
      <h1>Create & Edit Form</h1>
      <p>Use the form to create a name. After submitting, hover over name to edit the value.</p>
      {renderField}
    </Fragment>
  );
};

export default EditForm;

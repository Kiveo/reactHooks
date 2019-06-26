/* eslint-disable object-curly-newline */
import React, { Fragment, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
/**
|--------------------------------------------------
* This component is designed to act as an inline-edit field that can accept or reject changes
* initialValue prop is passed in to display prior data
* *handleConfirm prop should be used for API calls
* focusFireDisabled can be set to true to disable onMouseLeave triggering handleConfirm/API
* handleChange & handleReject props are for advanced functionality/validation/refactoring options
|--------------------------------------------------
*/

// -- CSS --
const styles = {
  focusStyle: { borderStyle: 'groove', borderWidth: '1px', borderColor: '#E8E8E8' },
  blurStyle: { border: '1px solid transparent' },
};

/* COMPONENT */
const InlineEditHook = ({ initialValue, handleConfirm, handleChange, handleReject, focusFireDisabled }) => {
// -- STATE & REF --
  const [storedValue, setStoredValue] = useState();
  const [newValue, setNewValue] = useState();
  const [focusState, setFocusState] = useState(false);
  const [activeCursor, setActiveCursor] = useState(false);
  const inputRef = useRef();

  // -- LIFECYCLE --
  useEffect(() => {
    setStoredValue(initialValue);
  }, [initialValue]);

  // -- HANDLERS --
  const handleConfirmEvent = () => {
    if (newValue && newValue !== initialValue) {
      handleConfirm(newValue);
    }
    setActiveCursor(false);
    setFocusState(false);
  };

  const handleRejectEvent = () => {
    setNewValue(storedValue);
    inputRef.current.value = storedValue;
    // without handleChange, there's no need for api revert. This is a failsafe/advanced option
    if (handleReject && handleChange) { handleReject(storedValue); }
    setActiveCursor(false);
    setFocusState(false);
  };

  // Do not use handleChange prop funcs that use API calls. Use handleConfirm for API calls.
  const handleChangeEvent = (e) => {
    if (handleChange) { handleChange(e.target.value); }
    setNewValue(e.target.value);
  };

  const enableFocus = () => {
    setFocusState(true);
  };

  const handleFocus = () => {
    setFocusState(true);
    setActiveCursor(true);
  };

  const handleBlur = () => {
    setActiveCursor(false);
  };

  // -- RENDER --
  const renderButtons = focusState && (
  <Fragment>
    <button onClick={handleConfirmEvent} type="button">Confirm</button>
    <button onClick={handleRejectEvent} type="button">Cancel</button>
  </Fragment>
  );

  return (
    <div
      className="edit-input--inline"
      onMouseEnter={!focusState ? enableFocus : null}
// TODO: add gate for if input field is active
      onMouseLeave={(focusState && !activeCursor && !focusFireDisabled) ? handleConfirmEvent : null}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="inline-edit..."
        defaultValue={storedValue}
        onChange={handleChangeEvent}
        onFocus={handleFocus}
        onBlur={activeCursor ? handleBlur : null}
        style={focusState ? styles.focusStyle : styles.blurStyle}
      />
      {renderButtons}
    </div>
  );
};

InlineEditHook.propTypes = {
  initialValue: PropTypes.string.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  handleReject: PropTypes.func,
  handleChange: PropTypes.func,
  focusFireDisabled: PropTypes.bool,
};

InlineEditHook.defaultProps = {
  handleReject: null,
  handleChange: null,
  focusFireDisabled: false,
};

export default InlineEditHook;

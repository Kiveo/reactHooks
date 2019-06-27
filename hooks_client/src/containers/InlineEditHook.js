/* eslint-disable object-curly-newline */
import React, { Fragment, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
/**
|--------------------------------------------------
* This component is designed to act as an inline-edit field that can accept or reject changes
* * initialValue prop is passed in to display prior data
* * handleConfirm prop should be used for API calls
* focusFireDisabled can be set to true to disable outside-click triggering handleConfirm
* handleChange & handleReject props are for advanced functionality/validation/refactoring options
* propRef can be passed in for more specific outside-click-region selection
|--------------------------------------------------
*/

// -- CSS --
const styles = {
  focusStyle: { borderStyle: 'groove', borderWidth: '1px', borderColor: '#E8E8E8' },
  blurStyle: { border: '1px solid transparent' },
};

/* COMPONENT */
const InlineEditHook = ({ initialValue, handleConfirm, handleChange, handleReject, focusFireDisabled, propRef }) => {
  /* -- STATE & REF -- */
  const [storedValue, setStoredValue] = useState();
  const [newValue, setNewValue] = useState();
  const [focusState, setFocusState] = useState(false);
  const [activeCursor, setActiveCursor] = useState(false);
  const inputRef = useRef();
  const divRef = useRef();

  /* -- LIFECYCLE METHODS -- */
  // this hook will store whatever initial value is passed in. Used for canceling/reverting input
  useEffect(() => {
    setStoredValue(initialValue);
  }, [initialValue]);

  // this hook setups up (&cleans up) click listener, when input is focused
  useEffect(() => {
    if (focusFireDisabled) { return null; } // escape if user disabled outside click feature
    const domTarget = propRef || document; // passed in Ref can be used instead of entire document.
    const outsideClickListener = (e) => {
      if (divRef.current.contains(e.target)) { return; }
      if (!divRef.current.contains(e.target)) {
        handleConfirm(inputRef.current.value);
        setActiveCursor(false);
        setFocusState(false);
      }
    };

    if (activeCursor) {
      domTarget.addEventListener('mousedown', outsideClickListener);
    } else { domTarget.removeEventListener('mousedown', outsideClickListener); }

    // return arrow function ~ componentWillUnmount
    return () => { domTarget.removeEventListener('mousedown', outsideClickListener); };
  }, [activeCursor, propRef, focusFireDisabled, handleConfirm]);

  /* -- HANDLERS -- */
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

  // handleChange is for non-primary functionality, like validation. Use handleConfirm for API.
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

  /* -- RENDER LOGIC -- */
  const renderButtons = focusState && (
    <Fragment>
      <button onClick={handleConfirmEvent} type="button">Confirm</button>
      <button onClick={handleRejectEvent} type="button">Cancel</button>
    </Fragment>
  );

  /* -- RENDER -- */
  return (
    <div
      className="edit-input--inline"
      ref={divRef}
      onMouseEnter={!focusState ? enableFocus : null}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="inline-edit..."
        defaultValue={storedValue}
        onChange={handleChangeEvent}
        onFocus={handleFocus}
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
  propRef: PropTypes.objectOf(PropTypes.object),
};

InlineEditHook.defaultProps = {
  handleReject: null,
  handleChange: null,
  focusFireDisabled: false,
  propRef: null,
};

export default InlineEditHook;

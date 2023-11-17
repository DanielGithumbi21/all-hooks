import React, { useRef } from "react";

function UseRef() {
  const inputRef = useRef(null);

  //  Refers to a certain element in the DOM, for example, an input element.
  // It is used to access the DOM node directly instead of using props or re-rendering the component.
  // It is also used to store mutable values that are not part of the component state.
  // It is similar to instance variables in class-based components.
  function handleClick() {
    inputRef.current.focus();
    console.log(inputRef.current.value);
  }

  return (
    <div>
      <h1>useRef</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default UseRef;

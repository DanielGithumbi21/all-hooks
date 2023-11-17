import React, { useRef, useImperativeHandle } from "react";

// By default, components don’t expose their DOM nodes to parent components.
// This is because it goes against the principle of encapsulation.
// However, there are certain cases where it is necessary to access DOM nodes directly.
// For example, when you want to focus an input element or play a video.
// In such cases, you can use refs to access DOM nodes directly.
const UseImperativeHandle = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  //  useImperativeHandle is used to customize the instance value that is exposed to parent components when using ref.
  //  It is used to hide certain properties and methods from parent components.

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return (
    <div>
      <h1>useImperativeHandle</h1>
      <input type="text" ref={inputRef} />
    </div>
  );
});

export default UseImperativeHandle;

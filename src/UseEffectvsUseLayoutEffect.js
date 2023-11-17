import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  //   useEffect is executed after the component has been rendered and the browser has painted the screen. This means that it is non-blocking and does not block the browser from rendering the component.

  useEffect(() => {
    console.log("useEffect");
    ref.current.style.backgroundColor = "red";
  }, [count]);
  // useLayoutEffect, on the other hand, is executed synchronously after all DOM mutations have been applied but before the browser has painted the screen. This means that it is blocking and can potentially cause performance issues if it takes too long to execute.

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    ref.current.style.color = "white";
  }, [count]);

  return (
    <div>
      <h1>useEffect vs useLayoutEffect</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div ref={ref}>This is a div element</div>
    </div>
  );
}

export default UseEffect;

import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function UseReducer() {
  // useReducer is used to manage state in a component.
  // It is similar to useState but is used for more complex state logic.
  // It is used to optimize performance.
  // It is also used to prevent unnecessary re-renders of child components.
  // A component re-renders when its props or state change.
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>useReducer</h1>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default UseReducer;

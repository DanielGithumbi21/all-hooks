import React, { useState, useDebugValue, useContext } from "react";
import { UserContext } from "./UserContext";

function UseDebugValueExample() {
  const [count, setCount] = useState(0);
  //  useDebugValue is used to display a label for custom hooks in React DevTools.
  //  It is not used in production.
  useDebugValue(
    count > 5 ? "Count is greater than 5" : "Count is less than or equal to 5"
  );
  // I can use the state in the whole app without passing props
  const { setUser } = useContext(UserContext);

  return (
    <div>
      <h1>useDebugValue</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </div>
    </div>
  );
}

export default UseDebugValueExample;

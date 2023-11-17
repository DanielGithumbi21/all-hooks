import "./App.css";
import UseCallBack from "./UseCallBack";
import UseContext from "./UseContext";
import UseDebugValueExample from "./UseDebugValue";
import UseEffect from "./UseEffectvsUseLayoutEffect";
import UseImperativeHandle from "./UseImperativeHandle";
import UseMemo from "./UseMemo";
import UseReducer from "./UseReducer";
import UseRef from "./UseRef";

function App() {
  return (
    <div className="App">
      <UseEffect />
      <UseRef />
      <UseCallBack />
      <UseMemo />
      <UseReducer />
      <UseImperativeHandle />
      <UseDebugValueExample />
      <UseContext />
    </div>
  );
}

export default App;

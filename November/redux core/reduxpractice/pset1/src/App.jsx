import { useState } from "react";
import "./App.css";
import { combineReducers, legacy_createStore } from "redux";

let INCREMENT = "INCREMENT";
let DECREMENT = "DECREMENT";

function counterreducer(state = 0, { type, payload }) {
  switch (type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
}
function themeReducer(state = "light-mode", { type, payload }) {
  switch (type) {
    case "dark-mode":
      return "dark-mode";
    case "light-mode":
      return "light-mode";
    default:
      return state;
  }
}
let root = combineReducers({
  theme: themeReducer,
  count: counterreducer,
});

let store = legacy_createStore(root);
function App() {
  let [state, setState] = useState(0);
  function handleDark() {
    store.dispatch({ type: "dark-mode" });
  }
  function handleLight() {
    store.dispatch({ type: "light-mode" });
  }
  function handleClick() {
    store.dispatch({ type: INCREMENT });
  }
  function handleDecrement() {
    store.dispatch({ type: DECREMENT });
  }
  function handleReset() {
    store.dispatch({ type: "reset" });
  }
  store.subscribe(() => {
    setState(state + 1);
  });
  return (
    <div>
      <h1>REDUX COUNTER</h1>
      <h2>Theme:{store.getState().theme}</h2>
      <h2>Count:{store.getState().count}</h2>
      <button onClick={handleLight}>LIGHT-MODE</button> &nbsp;
      <button onClick={handleDark}>DARK-MODE</button> &nbsp;
      <button onClick={handleClick}>INCREMENT</button> &nbsp;
      <button onClick={handleDecrement}>DECREMENT</button>
      &nbsp;
      <button onClick={handleReset}>RESET</button>
    </div>
  );
}

export default App;

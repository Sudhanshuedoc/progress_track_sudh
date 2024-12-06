import "./App.css";
import { legacy_createStore } from "redux";
import { useState } from "react";
// creating action types
let INCREMENT = "INCREMENT";
let DECREMENT = "DECREMENT";

// creating action creator
function increment() {
  return { type: INCREMENT };
}
function decrement() {
  return { type: DECREMENT };
}
function counterReducer(state = 0, { type, payload }) {
  switch (type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

let store = legacy_createStore(counterReducer);
function App() {
  const [count, setCount] = useState(0);
  store.subscribe(() => {
    setCount(count + 1);
  });

  return (
    <>
      <h1>Counter</h1>
      <h2>Count: {store.getState()} </h2>
      <button
        onClick={() => {
          store.dispatch(increment());
        }}
      >
        INCREMENT
      </button>{" "}
      &nbsp;
      <button
        onClick={() => {
          store.dispatch(decrement());
        }}
      >
        DECREMENT
      </button>
    </>
  );
}

export default App;

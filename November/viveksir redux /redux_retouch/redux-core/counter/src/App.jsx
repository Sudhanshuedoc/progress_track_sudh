import "./App.css";
import { useState } from "react";
import { legacy_createStore } from "redux";
import { applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

// action types
let INCREMENT = "INCREMENT";
let DECREMENT = "DECREMENT";
const logger = createLogger({
  collapsed: true,
});

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

let store = legacy_createStore(counterReducer, applyMiddleware(logger));
function App() {
  let [state, setState] = useState(0);
  store.subscribe(() => {
    setState(store.getState());
  });
  return (
    <>
      <h1>COUNTER</h1>
      <h2>Count:{store.getState()}</h2>
      <button
        onClick={() => {
          store.dispatch(increment());
        }}
      >
        INCREMENT
      </button>
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

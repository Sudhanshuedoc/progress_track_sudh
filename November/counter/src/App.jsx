import { legacy_createStore } from "redux";
import "./App.css";
import { useState } from "react";

const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";
function counterReducer(state = 0, { type, payload }) {
  switch (type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
}

let store = legacy_createStore(counterReducer);

function App() {
  let [count, setCount] = useState(0);
  console.log(store.getState());
  function handleClick(arg) {
    store.dispatch({ type: arg });
    console.log(store.getState(1));
  }
  store.subscribe(() => {
    setCount(count + 1);
  });
  return (
    <>
      <h1>Count:{store.getState()}</h1>
      <button
        onClick={() => {
          handleClick(INCREMENT);
        }}
      >
        INCREMENT
      </button>
      <button
        onClick={() => {
          handleClick(DECREMENT);
        }}
      >
        DECREMENT
      </button>
      <button
        onClick={() => {
          handleClick(RESET);
        }}
      >
        RESET
      </button>
    </>
  );
}

export default App;

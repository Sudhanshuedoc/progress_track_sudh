import { useState } from "react";
import "./App.css";
import { legacy_createStore } from "redux";

let INCREMENT = "INCREMENT";
let DECREMENT = "DECREMENT";
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

const store = legacy_createStore(counterReducer);
function App() {
  let [state, setState] = useState(0);
  function handleClick(arg) {
    store.dispatch({ type: arg });
  }
  store.subscribe(() => {
    setState(state + 1);
  });
  console.log(store.getState());
  return (
    <>
      <p>{store.getState()}</p>
      <button
        onClick={() => {
          handleClick("INCREMENT");
        }}
      >
        INCREMENT
      </button>{" "}
      &nbsp;
      <button
        onClick={() => {
          handleClick("DECREMENT");
        }}
      >
        DECREMENT
      </button>
    </>
  );
}

export default App;

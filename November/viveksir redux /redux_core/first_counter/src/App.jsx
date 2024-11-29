import { useState } from "react";
import "./App.css";
import { legacy_createStore } from "redux";

//creating action types its nothing but a constant that tend to avoid typos
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

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
  const state = store;
  console.log(state);
  function handleIncrement() {
    store.dispatch(increment());
  }
  function handleDecrement() {
    store.dispatch(decrement());
  }
  store.subscribe(() => {
    console.log("hola");
    setCount(count + 1);
  });
  return (
    <>
      <h1>Counter:{state.getState()}</h1>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
    </>
  );
}

export default App;

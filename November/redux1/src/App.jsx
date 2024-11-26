import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function counterReducer(state = 0, { type, payload }) {
  switch (type) {
    case "incre":
      return state + 1;
    default:
      return state;
  }
}

let store = legacy_createStore(counterReducer);

function App() {
  const [count, setCount] = useState(0);

  function handleClick(arg) {
    store.dispatch({ type: arg });
  }

  return (
    <>
      <h1>Redux Counter</h1>
      <h3>Count:{store.getState()}</h3>
      <button
        onClick={() => {
          handleClick("incre");
        }}
      >
        Increment (+)
      </button>
      <button
        onClick={() => {
          handleClick("decre");
        }}
      >
        Decrement (-)
      </button>
    </>
  );
}

export default App;

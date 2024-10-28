// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  return (
    <>
      <h1>COUNTER: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        INCREASE COUNT
      </button>
    </>
  );
}

export default App;

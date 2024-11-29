// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { legacy_createStore } from "redux";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

let INCREONE = "INCREONE";
let INCRETWO = "INCRETWO";
let INCRETHREE = "INCRETHREE";
let INCREFOUR = "INCREFOUR";
function increone() {
  return { type: INCREONE, payload: 1 };
}
function incretwo() {
  return { type: INCRETWO, payload: 2 };
}
function increthree() {
  return { type: INCRETHREE, payload: 3 };
}
function increfour() {
  return { type: INCREFOUR, payload: 4 };
}
function counterReducer(state = 0, { type, payload }) {
  switch (type) {
    case INCREONE:
      return state + payload;
    case INCRETWO:
      return state + payload;
    case INCRETHREE:
      return state + payload;
    case INCREFOUR:
      return state + payload;
    default:
      return state;
  }
}
export let store = legacy_createStore(counterReducer);
function App() {
  let dispatch = useDispatch();
  let count = useSelector((state) => state);
  // const [count, setCount] = useState(0);
  function handleIncre(arg) {
    switch (arg) {
      case 1:
        dispatch(increone());
        break;
      case 2:
        dispatch(incretwo());
        break;
      case 3:
        dispatch(increthree());
        break;
      case 4:
        dispatch(increfour());
        break;
      default:
        throw new Error("wrong input");
    }
  }

  return (
    <>
      <h1>Counter:{count}</h1>
      <button
        onClick={() => {
          handleIncre(1);
        }}
      >
        INC 1
      </button>
      <button
        onClick={() => {
          handleIncre(2);
        }}
      >
        INC 2
      </button>
      <button
        onClick={() => {
          handleIncre(3);
        }}
      >
        INC 3
      </button>
      <button
        onClick={() => {
          handleIncre(4);
        }}
      >
        INC 4
      </button>
    </>
  );
}

export default App;

import { useDispatch, useSelector } from "react-redux";
import { applyMiddleware, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import "./App.css";

let INCREMENT = "INCREMENT";
let DECREMENT = "DECREMENT";

function increment() {
  return { type: INCREMENT };
}

function decrement() {
  return { type: DECREMENT };
}

function handleIncreAsync() {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}
function handleDecreAsync() {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(decrement());
    }, 2000);
  };
}

function counterReducer(state = 0, { type }) {
  switch (type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

export let store = legacy_createStore(
  counterReducer,
  applyMiddleware(thunk) // Corrected usage
);

function App() {
  let dispatch = useDispatch();
  let count = useSelector((state) => state);

  function handleIncre() {
    dispatch(handleIncreAsync());
  }

  function handleDecre() {
    dispatch(handleDecreAsync());
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleIncre}>Increase</button> &nbsp;
      <button onClick={handleDecre}>Decrease</button>
    </>
  );
}

export default App;

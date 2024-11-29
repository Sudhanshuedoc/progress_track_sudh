import { legacy_createStore } from "redux";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
// action type
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

function increment() {
  return { type: INCREMENT };
}
function decrement() {
  return { type: DECREMENT };
}
export function counterReducer(state = 0, { type }) {
  switch (type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
function App() {
  const state = useSelector((state) => state);
  let dispatch = useDispatch();
  function handleIncre() {
    dispatch(increment());
  }
  function handleDecre() {
    dispatch(decrement());
  }
  return (
    <>
      <h1>Counter:{state}</h1>
      <button onClick={handleIncre}>Increment</button>
      <button onClick={handleDecre}>Decrement</button>
    </>
  );
}

export default App;

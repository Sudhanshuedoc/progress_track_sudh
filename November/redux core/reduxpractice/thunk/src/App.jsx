import "./App.css";
import { applyMiddleware, legacy_createStore } from "redux";
import { useDispatch, useSelector } from "react-redux";
// import thunk from "redux-thunk"; // Change this line
import thunk from "redux-thunk";
const increment = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: "increment" });
    }, 1000);
  };
};

function counterReducer(state = 0, { type, payload }) {
  switch (type) {
    case "increment":
      return state + 1;
    default:
      return state;
  }
}

export const store = legacy_createStore(counterReducer, applyMiddleware(thunk));

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state);

  return (
    <>
      <h1>Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
    </>
  );
}

export default App;

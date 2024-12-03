import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { configureStore, createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});
let { increment, decrement } = counterSlice.actions;
let counterReducer = counterSlice.reducer;
export let store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

function App() {
  let dispatch = useDispatch();
  let value = useSelector((state) => state.counter);
  function handleIncre() {
    dispatch(increment());
  }
  function handleDecre() {
    dispatch(decrement());
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>Count:{value}</h2>
      <button onClick={handleIncre}>INCREMENT</button>
      <button onClick={handleDecre}>DECREMENT</button>
    </>
  );
}

export default App;

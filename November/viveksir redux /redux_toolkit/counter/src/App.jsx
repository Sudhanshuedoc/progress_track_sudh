import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import viteLogo from "/vite.svg";
import "./App.css";

let slice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export let store = configureStore({
  reducer: {
    user: UserReducer,
  },
});
let { increment, decrement } = createSlice.actions;
function App() {
  // const [count, setCount] = useState(0);
  let dispatch = useDispatch();
  let value = useSelector((state) => state.user.value);
  console.log(value);

  return (
    <>
      <h1>Counter</h1>
    </>
  );
}

export default App;

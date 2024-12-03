import "./App.css";
import { createSlice, counterSlice } from "@reduxjs/toolkit";

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
  reducer: counterReducer,
});
function App() {
  return (
    <>
      <h1>Counter</h1>
    </>
  );
}

export default App;

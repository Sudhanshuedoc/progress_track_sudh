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
let counterReducer = counterSlice.reducer;
let { increment, decrement } = counterSlice.actions;

export const store = configureStore({
  reducer: {
    count: counterReducer,
  },
});
function App() {
  let dispatch = useDispatch();
  let value = useSelector((state) => state.count);
  console.log(counterSlice);
  function handleIncre() {
    dispatch(increment());
  }
  function handleDecre() {
    dispatch(decrement());
  }
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>Value:{value}</h1>
      <button onClick={handleIncre}>INCREMENT</button>
      <button onClick={handleDecre}>DECREMENT</button>
    </>
  );
}

export default App;

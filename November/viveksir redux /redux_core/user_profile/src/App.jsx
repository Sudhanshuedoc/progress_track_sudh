import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { legacy_createStore } from "redux";
import "./App.css";
let initialState = {
  name: "Sudhanshu",
  age: 24,
  email: "sudhanshu2dbit@gmail.com",
};
//action type
const UPDATE = "UPDATE";
const RESET = "RESET";
function update(userdata) {
  return { type: UPDATE, payload: userdata };
}
function reset() {
  return { type: RESET };
}
function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case UPDATE:
      return { ...state, ...payload };
    case RESET:
      return { ...initialState };
    default:
      return initialState;
  }
}
export let store = legacy_createStore(userReducer);
function App() {
  let dispatch = useDispatch();
  let value = useSelector((state) => state);
  // console.log(value);

  const [userData, setuserData] = useState({
    name: value.name,
    age: value.age,
    email: value.email,
  });
  function handleChange(e) {
    setuserData({ ...userData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(update(userData));
  }
  function handleReset() {
    dispatch(reset());
  }

  return (
    <>
      <h1>User Profile Management</h1>
      <h2>Current profile Info</h2>
      <h2>Name: {value.name}</h2>
      <h2>Email: {value.email}</h2>
      <h2>Age: {value.age}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name: </label>
        <input type="text" name="name" id="" onChange={handleChange} /> <br />
        <br />
        <label htmlFor="">EMAIL: </label>
        <input type="email" name="email" id="" onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="">Age: </label>
        <input type="number" name="age" id="" onChange={handleChange} /> <br />
        <br />
        <button type="submit">UPDATE</button> &nbsp;
        <button type="button" onClick={handleReset}>
          RESET
        </button>
      </form>
    </>
  );
}

export default App;

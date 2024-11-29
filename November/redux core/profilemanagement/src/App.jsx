// import { useState } from "react";
import { legacy_createStore } from "redux";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

const UPDATE_USER = "UPDATE_USER";
const RESET_USER = "RESET_USER";
let initialState = { name: "John Doe", email: "john@example.com", age: 24 };
function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case UPDATE_USER:
      return { ...state, ...payload };
    case RESET_USER:
      return { ...state, ...payload };
    default:
      return initialState;
  }
}

let store = legacy_createStore(userReducer);
function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({
    name: "",
    email: "",
    age: "",
  });
  function handleChange(e) {
    console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function handleSubmit() {
    console.log(data);
    store.dispatch({ type: UPDATE_USER, payload: data });
  }
  store.subscribe(() => {
    setCount(count + 1);
  });

  return (
    <>
      <div id="main">
        <h1>User profile management</h1>
        <br />
        <div id="current">
          <h3>Current user info</h3>
          <p>Name:{store.getState().name}</p>
          <p>Email:{store.getState().email}</p>
          <p>Age:{store.getState().age}</p>
        </div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          placeholder="name"
          value={data.name}
          onChange={handleChange}
          name="name"
          id="name"
        />{" "}
        <br /> <br />
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          id=""
          onChange={handleChange}
        />{" "}
        <br /> <br />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id=""
          value={data.age}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <button onClick={handleSubmit}>Update User</button>
        <button
          onClick={() => {
            store.dispatch({ type: RESET_USER, payload: initialState });
          }}
        >
          RESET
        </button>
      </div>
    </>
  );
}

export default App;

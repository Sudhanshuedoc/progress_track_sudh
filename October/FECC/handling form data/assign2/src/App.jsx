import { useState } from "react";
import "./App.css";
import { useReducer } from "react";
let initialState = {
  email: "",
  password: "",
};
function reducer(state, { type, payload }) {
  switch (type) {
    case "email":
      initialState = { ...payload };
      return initialState;
    case "password":
      initialState = { ...payload };
      return initialState;
    case "reset":
      initialState = { email: "", password: "" };
      return initialState;
  }
}

function App() {
  let [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "reset" });
  }

  return (
    <>
      {state.email || state.password ? (
        <div>
          <div>User Email : {state.email}</div>
          <div>User Password : {state.password}</div>
        </div>
      ) : (
        <div>No data found</div>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          {" "}
          Email:
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={(e) => {
              dispatch({
                type: "email",
                payload: { ...initialState, [e.target.name]: e.target.value },
              });
            }}
          />
        </label>
        <label htmlFor="">
          {" "}
          Password:
          <input
            type="password"
            value={state.password}
            name="password"
            id=""
            onChange={(e) => {
              dispatch({
                type: "password",
                payload: { ...initialState, [e.target.name]: e.target.value },
              });
            }}
          />
        </label>
        <br />
        <br />
        <input type="submit" value="reset" name="" id="" />
      </form>
    </>
  );
}

export default App;

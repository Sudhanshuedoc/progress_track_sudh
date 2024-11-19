import { useReducer, useState } from "react";

import "./App.css";

function reducer(state, { type, payload }) {
  switch (type) {
    case "toggle":
      return !state;
  }
}

function App() {
  let message = "hello world!!";
  const [state, dispatch] = useReducer(reducer, false);

  return (
    <>
      {state ? message : null}
      <br />
      <button
        onClick={() => {
          dispatch({ type: "toggle" });
        }}
      >
        Toggle
      </button>
    </>
  );
}

export default App;

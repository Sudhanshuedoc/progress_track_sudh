import { useState } from "react";
import "./App.css";
import { legacy_createStore } from "redux";

const SET_THEME = "SET_THEME"; // defined action types

function themeReducer(state = "light-mode", { type, payload }) {
  switch (type) {
    case SET_THEME:
      return payload;
    default:
      return state;
  }
}
let store = legacy_createStore(themeReducer);
function App() {
  let [count, setcount] = useState(0);
  // console.log(store.getState());
  function changeTheme(theme) {
    store.dispatch({ type: SET_THEME, payload: theme });
  }
  store.subscribe(() => {
    console.log(store.getState());
    setcount(count + 1);
  });
  return (
    <>
      <pre>{JSON.stringify(store.getState())}</pre>
      <button
        onClick={() => {
          changeTheme("light-mode");
        }}
      >
        LIGHT-MODE
      </button>

      <button
        onClick={() => {
          changeTheme("dark-mode");
        }}
      >
        DARK-MODE
      </button>
    </>
  );
}

export default App;

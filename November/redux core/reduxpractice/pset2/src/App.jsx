import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { legacy_createStore, combineReducers } from "redux";

import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function themeReducer(state = "light-mode", { type, payload }) {
  switch (type) {
    case "toggle":
      return state === "light-mode" ? "dark-mode" : "light-mode";
    default:
      return state;
  }
}
function cartReducer(state = [], { type, payload }) {
  switch (type) {
    case "add-cart":
      return [...state, payload];
    default:
      return state;
  }
}
let root = combineReducers({
  theme: themeReducer,
  cart: cartReducer,
});
export let store = legacy_createStore(root);
function App() {
  let theme = useSelector((store) => store.theme);
  let carts = useSelector((store) => store.cart);
  let [cart, setCart] = useState("");
  const dispatch = useDispatch();
  function handleTheme() {
    dispatch({ type: "toggle" });
  }
  function cartAdd() {
    dispatch({ type: "add-cart", payload: cart });
    setCart("");
  }

  return (
    <>
      <h1>THEME </h1>
      <h2
        style={{
          color: theme === "light-mode" ? "yellow" : "purple",
        }}
      >
        {" "}
        Theme Status : {theme}{" "}
      </h2>
      <button onClick={handleTheme}>{theme}</button>
      <hr />
      <h1>CART</h1>
      <input
        type="text"
        value={cart}
        placeholder="ADD ITEM"
        onChange={(e) => {
          setCart(e.target.value);
        }}
      />{" "}
      &nbsp;
      <button onClick={cartAdd}>ADD TO CART</button>
      {carts?.map((ele) => {
        return <p key={ele}>{ele}</p>;
      })}
      <hr />
    </>
  );
}

export default App;

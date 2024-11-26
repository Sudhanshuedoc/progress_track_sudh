import { useReducer, useState } from "react";
import "./App.css";
import { combineReducers, legacy_createStore } from "redux";

const SET_THEME = "SET_THEME";
const CHANGE_USER = "CHANGE_USER";
const ADD_TO_CART = "ADD_TO_CART";

function themereducer(state = "light-mode", { type, payload }) {
  switch (type) {
    case SET_THEME:
      return payload;
    default:
      return state;
  }
}
function cartReducer(state = [], { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      return [...state, payload];
    default:
      return state;
  }
}
function userReducer(
  state = { username: null, loggedIn: false },
  { type, payload }
) {
  switch (type) {
    default:
      return state;
  }
}

let rootReducer = combineReducers({
  themereducer,
  cartReducer,
  userReducer,
});

let store = legacy_createStore(rootReducer);
function App() {
  const [state, setState] = useState(0);
  const [cart, setCart] = useState("");
  const [user, setUser] = useState("");
  function handleCart() {
    store.dispatch({ type: ADD_TO_CART, payload: cart });
  }
  function handleClick(arg) {
    store.dispatch({ type: SET_THEME, payload: arg });
  }
  store.subscribe(() => {
    setState(state + 1);
  });

  return (
    <>
      {JSON.stringify(store.getState())} <br /> <br />
      <button
        onClick={() => {
          handleClick("light-mode");
        }}
      >
        LIGHT MODE
      </button>
      <button
        onClick={() => {
          handleClick("dark-mode");
        }}
      >
        DARKMODE
      </button>
      <hr />
      <input
        type="text"
        onChange={(e) => {
          setCart(e.target.value);
        }}
        placeholder="ADD TO CART"
        name=""
        id=""
      />
      <button onClick={handleCart}>ADD TO CART</button>
      <hr />
      <input
        type="text"
        placeholder="LOGIN"
        name=""
        id=""
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <button onClick={handleUser("login")}>LOGIN</button>
      <button>LOGOUT</button>
    </>
  );
}

export default App;

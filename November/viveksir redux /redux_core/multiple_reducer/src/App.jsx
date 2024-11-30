import { combineReducers, legacy_createStore } from "redux";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

let initialState = {
  name: "Sudhanshu Ranjan",
  age: 24,
  email: "sudhanshu2dbit@gmail.com",
};
let INCREMENT = "INCREMENT";
let DECREMENT = "DECREMENT";

function countreducer(state = 0, { type, payload }) {
  switch (type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    default:
      return initialState;
  }
}
let root = combineReducers({
  count: countreducer,
  user: userReducer,
});

export let store = legacy_createStore(root);
function App() {
  let dispatch = useDispatch();
  let countVal = useSelector((state) => state);
  let user = useSelector((state) => state.user);
  let [state, setState] = useState({
    name: user.name,
    age: user.age,
    email: user.email,
  });
  return (
    <>
      <h1>Redux multiple Reducer demo</h1>
      <div id="root">
        <div>
          <h2>Counter</h2>
          <h2>Count:{countVal}</h2>
          <button
            onClick={() => {
              dispatch({ type: INCREMENT });
            }}
          >
            INCREMENT(+)
          </button>{" "}
          &nbsp;
          <button
            onClick={() => {
              dispatch({ type: DECREMENT });
            }}
          >
            DECREMENT(-)
          </button>
        </div>
        <div>
          <h1>User Profile</h1>
          <h2>Current User info</h2>
          <p>Name: </p>
          <p>Email: </p>
          <p>Age: </p>
          <label htmlFor="">Name: </label>
          <input type="text" name="" id="" onChange={handleChage} />
          {/* do thid from here todo */}
          <br />
          <br />
          <label htmlFor="">Email: </label>
          <input type="email" name="" id="" onc />
          <br />
          <br />
          <label htmlFor="">Age: </label>
          <input type="number" name="" id="" />
          <br />
          <br />
          <button>UPDATE</button> &nbsp;
          <button>RESET</button>
        </div>
      </div>
    </>
  );
}

export default App;

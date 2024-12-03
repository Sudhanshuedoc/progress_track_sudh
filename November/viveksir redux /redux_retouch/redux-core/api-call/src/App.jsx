import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { applyMiddleware, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
let APICALL = "APICALL";
let initialState = {
  user: [],
  loading: false,
  error: null,
};
function apicall(data) {
  return { type: APICALL, payload: data };
}

function apicallsync() {
  return async (dispatch) => {
    let request = await fetch("https://reqres.in/api/users");
    let data = await request.json();
    dispatch(apicall(data.data));
  };
}

function apiReducer(state = initialState, { type, payload }) {
  switch (type) {
    case APICALL:
      return { ...state, user: payload };
    default:
      return state;
  }
}
export let store = legacy_createStore(apiReducer, applyMiddleware(thunk));
function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  // console.log(value.user);
  useEffect(() => {
    dispatch(apicallsync());
    console.log(user);
  }, []);
  return (
    <>
      {user.map((ele) => {
        return (
          <div key={ele.id}>
            <h1>Email:{ele.email}</h1>
          </div>
        );
      })}
    </>
  );
}

export default App;

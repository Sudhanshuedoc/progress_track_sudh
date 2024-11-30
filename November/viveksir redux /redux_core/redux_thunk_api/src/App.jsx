import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunk } from "redux-thunk";
import { applyMiddleware, legacy_createStore } from "redux";
import "./App.css";

// action type
let FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
let FETCH_USER_SUCCESS = "FETCH_USER_REQUEST";
let FETCH_USER_FAILURE = "FETCH_USER_PROFILE";

function fetchUserRequest() {
  return { type: FETCH_USER_REQUEST };
}
function fetchUserFailure(err) {
  return { type: FETCH_USER_FAILURE, payload: err };
}
function userSuccess(data) {
  return { type: FETCH_USER_SUCCESS, payload: data };
}

let initialState = {
  data: null,
  loading: false,
  error: null,
};
function apireducer(state = initialState, { type, payload }) {
  switch (state) {
    case FETCH_USER_SUCCESS:
      return { ...state, data: payload, loading: false, error: null };
    case FETCH_USER_FAILURE:
      return { ...state, err: payload, loading: false };
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    default:
      return state;
  }
}
function apicall() {
  return async function (dispatch) {
    dispatch(fetchUserRequest());
    try {
      let request = await fetch("https://reqres.in/api/users/2");
      let data = await request.json();
      dispatch(userSuccess(data));
    } catch (err) {
      dispatch(fetchUserFailure(err.message));
    }
  };
}

export let store = legacy_createStore(apireducer, applyMiddleware(thunk));
function App() {
  let dispatch = useDispatch();
  let value = useSelector((state) => state);
  // const [count, setCount] = useState(0);
  useEffect(() => {
    dispatch(apicall());
  }, []);
  // let  = value.data;
  return (
    <>
      <h1>{value.data.email}</h1>
      {/* <h2>{firstName}</h2>
      <h2>{lastName}</h2> */}
    </>
  );
}

export default App;

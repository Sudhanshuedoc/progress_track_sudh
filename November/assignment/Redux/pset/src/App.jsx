import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { legacy_createStore } from "redux";

const todo = {
  title: "",
  status: false,
  id: "",
};
let ADDTODO = "ADDTODO";

function todoReducer(state = [], { type, payload }) {
  switch (type) {
    case ADDTODO:
      return [...state, { ...payload, id: Date.now() }];
    default:
      return state;
  }
}
export let store = legacy_createStore(todoReducer);
function App() {
  const [data, setData] = useState(todo);
  let dispatch = useDispatch();
  let value = useSelector((state) => state);
  console.log(value);
  function handleChange(e) {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setData({ ...data, [e.target.name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ADDTODO, payload: { ...data } });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title: </label>
        <input type="text" name="title" id="" onChange={handleChange} /> <br />
        <br />
        <label htmlFor="">Status: </label>
        <input
          type="checkbox"
          name="status"
          id=""
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      {value &&
        value?.map((ele) => {
          return (
            <div
              key={ele.id}
              style={{ border: "1px solid red", margin: "10px" }}
            >
              <p>Title: {ele.title}</p>
              <p>Status :{ele.status ? "Yes" : "No"}</p>
            </div>
          );
        })}
    </>
  );
}

export default App;

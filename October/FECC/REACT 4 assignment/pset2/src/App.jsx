import { useState } from "react";
import "./App.css";

function App() {
  const [formState, setFormState] = useState({
    task: "",
    isCompleted: false,
    assignedTo: "",
  });
  const [submit, setSubmit] = useState([]);
  function handleChange(e) {
    // console.log(e.target.value);
    // console.log(e.target.checked);
    let val = e.target.name;
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    console.log(value);
    let newform = {
      ...formState,
      [val]: value,
    };
    setFormState(newform);
    console.log(newform);
  }
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e);
    let newarr = [...submit, formState];
    setSubmit(newarr);
    setFormState({ task: "", isCompleted: false, assignedTo: "" });
    console.log(newarr);
  }

  return (
    <>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Task: </label>
        <input
          type="text"
          value={formState.task}
          name="task"
          id=""
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <label htmlFor="">isCompleted:</label>
        <input
          type="checkbox"
          name="isCompleted"
          id=""
          value={formState.isCompleted}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <select
          name=""
          value={formState.assignedTo}
          name="assignedTo"
          id=""
          onChange={handleChange}
        >
          <option value="">Select person to assign</option>
          <option value="sudhanshu">Sudhanshu</option>
          <option value="ranjan">Ranjan</option>
          <option value="antiflammable">Antiflammable</option>
        </select>{" "}
        <br />
        <br />
        <input type="submit" name="" id="" />
      </form>
      {}
    </>
  );
}

export default App;

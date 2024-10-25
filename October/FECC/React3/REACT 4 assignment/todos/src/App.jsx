import { useState } from "react";
import "./App.css";

function App() {
  let [submit, setSubmit] = useState([]);
  let [formState, setFormState] = useState({
    task: "",
    isCompleted: false,
    assignedTo: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    let newarr = [...submit, formState];
    setSubmit(newarr);
    setFormState({
      task: "",
      isCompleted: false,
      assignedTo: "",
    });
    console.log(newarr);
  }
  function handleChange(e) {
    // console.log(e.target.value);
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    let newFormState = { ...formState, [e.target.name]: value };
    setFormState(newFormState);
    // console.log(newFormState);
  }
  return (
    <>
      <div id="parent">
        <div id="left" className="child">
          <h1 id="title">To-do&#39;s</h1>
          <div id="inputs">
            <form onSubmit={handleSubmit}>
              {" "}
              <label htmlFor="task">Task : </label>
              <input
                value={formState.task}
                onChange={handleChange}
                type="text"
                placeholder="Enter Task"
                name="task"
                id="task"
              />{" "}
              <br /> <br /> <br />
              <label htmlFor="completed">isCompleted : </label>
              <input
                checked={formState.isCompleted}
                type="checkbox"
                name="isCompleted"
                onChange={handleChange}
                id="completed"
              />
              <br />
              <br />
              <br />
              <label htmlFor="">Select Person : </label>
              <select
                value={formState.assignedTo}
                name="assignedTo"
                id=""
                onChange={handleChange}
              >
                <option value="">Select Person</option>
                <option value="Sudhansuh">Sudhanshu</option>
                <option value="Aditya">Aditya</option>
                <option value="Shantnu">Shantnu</option>
              </select>{" "}
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <input type="submit" name="" id="" />
            </form>
          </div>
        </div>
        <div id="right" className="child">
          <div id="table">
            <table>
              <thead>
                <tr>
                  <th>TITLE</th>
                  <th>STATUS</th>
                  <th>ASSIGNED TO</th>
                </tr>
              </thead>
              <tbody>
                {submit.map((ele) => {
                  return (
                    <tr key={ele.task}>
                      <td>{ele.task}</td>
                      <td style={{ color: ele.isCompleted ? "green" : "red" }}>
                        {ele.isCompleted ? "Completed" : "Not-Completed"}
                      </td>
                      <td>{ele.assignedTo}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

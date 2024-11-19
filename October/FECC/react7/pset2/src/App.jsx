import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [val, setval] = useState("");
  async function fetchData() {
    let request = await fetch("https://jsonplaceholder.typicode.com/albums");
    let response = await request.json();
    setData(response);
  }
  useEffect(() => {
    fetchData();
  }, []);

  async function handleClick(e) {
    setval(e.target.value);
    let request = await fetch({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
  }
  return (
    <>
      <form action="">
        <label htmlFor="title">Title: </label>
        <input type="text" name="" id="title" /> <br />
        <br />
        <button onClick={handleClick} className="button-52" role="button">
          Submit
        </button>
      </form>
      {data.map((ele) => {
        return (
          <div key={ele.id}>
            <h3>Title: {ele.title}</h3>
          </div>
        );
      })}
    </>
  );
}

export default App;

import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setErr] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      let request = await fetch("https://jsonplaceholder.typicode.com/users");
      let response = await request.json();
      console.log(response);
      setData(response);
      setLoading(false);
    } catch (err) {
      setErr(true);
      console.log(err);
    }
  }
  // write fetch logic  and then using useEffect with empty array so that it run only during mount phase
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <div>LOADING......</div>;
  }
  if (error) {
    return <div>ERROR.......</div>;
  }

  return (
    <>
      {data.map((ele) => {
        return (
          <div key={ele.id}>
            <h2>Name:{ele.username}</h2>
            <h3>email:{ele.email}</h3>
            <h4>Address : {ele.address.street}</h4>
          </div>
        );
      })}
    </>
  );
}

export default App;

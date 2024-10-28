import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  async function getData(page) {
    let request = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
    );
    let datas = await request.json();
    console.log(datas);
    setData(datas);
  }
  // getData();
  useEffect(() => {
    getData(page);
  }, [page]);
  return (
    <>
      <button onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>NEXT</button>
      {data.map((ele) => {
        return (
          <div key={ele.id} style={{ border: "1px solid red", margin: "10px" }}>
            <h1>ID: {ele.id}</h1>
            <h3>TITLE : {ele.title}</h3>
            <h3>BODY :{ele.body}</h3>
          </div>
        );
      })}
    </>
  );
}

export default App;

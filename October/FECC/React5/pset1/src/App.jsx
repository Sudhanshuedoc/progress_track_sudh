import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import PostItem from "./components/postItem";

function App() {
  const [datas, setData] = useState([]);
  async function handleClick() {
    let request = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await request.json();
    console.log(data);
    setData(data);
  }

  return (
    <>
      <button onClick={handleClick}>Get Data</button>
      {datas.map((ele) => {
        return <PostItem id={ele.id} title={ele.title} key={ele.id} />;
      })}
    </>
  );
}

export default App;

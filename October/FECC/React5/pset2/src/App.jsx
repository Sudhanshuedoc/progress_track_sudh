import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  useEffect(() => {
    console.log(
      "callback inside useeffect is called",
      Date.now().toLocaleString()
    );
  }, []);
  return (
    <>
      <button onClick={handleClick}>Increase Count</button>
      <p>{count}</p>
    </>
  );
}

export default App;

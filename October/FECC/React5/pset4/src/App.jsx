import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function Ticker() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    let ticker = setInterval(() => {
      setCount((prev) => prev + 1);
      console.log("Ticker");
    }, 1000);
    return () => {
      clearInterval(ticker);
      console.log("clear interval");
    };
  }, []);
  return (
    <div style={{ border: "1px solid red" }}>
      <h1>Ticker</h1>
      <p>{count}</p>
    </div>
  );
}
function App() {
  const [showComponent, setShowComponent] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setShowComponent(!showComponent);
        }}
      >
        Toggle
      </button>
      {showComponent && <Ticker />}
    </>
  );
}

export default App;

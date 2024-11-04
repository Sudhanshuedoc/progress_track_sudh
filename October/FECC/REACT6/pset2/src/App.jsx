import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

let timer;
function Stopwatch() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    document.title = "Components mounted.";
    timer = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
      setCounter(0);
      document.title = "Components unmounted.";
    };
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
    </div>
  );
}

function App() {
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow(!show);
  }

  return (
    <>
      <button onClick={handleClick}>{show ? "Hide" : "Show"}</button>
      {show && <Stopwatch />}
    </>
  );
}

export default App;

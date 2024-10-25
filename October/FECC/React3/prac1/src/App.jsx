import { useState } from "react";

import "./App.css";
function Mybutton({ value, handle }) {
  return <button onClick={handle}>count :{value}</button>;
}

function App() {
  let [count, setCount] = useState(0);
  function handleCount() {
    setCount(count + 1);
  }

  return (
    <>
      <Mybutton value={count} handle={handleCount} />
      <Mybutton value={count} handle={handleCount} />
    </>
  );
}

export default App;

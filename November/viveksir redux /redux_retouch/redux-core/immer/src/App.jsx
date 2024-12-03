import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { produce } from "immer";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  let obj = {
    name: "Sudhanshu",
    age: 24,
    family: {
      father: "Rajeshwar Prasad",
      mother: "Sudha Devi",
      sister: "Soumya Devi",
      brother: "Manish Ranjan",
    },
  };
  let newObj = produce(obj, (draft) => {
    draft.father = "Mr. Rajeshwar Prasad";
  });
  console.log(newObj);
  console.log(obj);
  return <></>;
}

export default App;

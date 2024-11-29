import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import { Link, Routes, Route } from "react-router-dom";
// import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import User from "./components/User";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/user">USER</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;

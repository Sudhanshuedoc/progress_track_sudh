import React from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => navigate("/")}>Home</button>
        </li>
        <li>
          <button onClick={() => navigate("/about")}>About</button>
        </li>
        <li>
          <button onClick={() => navigate("/products")}>Products</button>
        </li>
        <li>
          <button onClick={() => navigate("/contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

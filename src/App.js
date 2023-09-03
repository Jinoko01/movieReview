import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import About from "./pages/About";
import Detail from "./pages/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/movie-detail" element={<Detail />} />
    </Routes>
  );
}

export default App;

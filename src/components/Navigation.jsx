import React from "react";
import { Link } from "react-router-dom";
import "../style/Navigation.css";

const Navigation = () => {
  return (
    <div id="navigationParentDiv">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Navigation;

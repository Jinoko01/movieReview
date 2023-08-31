import React from "react";
import "../style/About.css";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div>
      <Navigation />
      <div id="aboutParentDiv">
        <span>
          "Freedom is the freedom to say that two plus two make four. If that is
          granted, all else follows."
        </span>
        <span>- George Orwell, 1984</span>
      </div>
    </div>
  );
};

export default About;

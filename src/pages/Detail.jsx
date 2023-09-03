import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { year, title, summary, poster, genres } = location.state;

  useEffect(() => {
    if (location.state === null) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Navigation />
      {title}
    </div>
  );
};

export default Detail;

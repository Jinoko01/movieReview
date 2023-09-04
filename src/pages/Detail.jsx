import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import "../style/Detail.css";

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
      <div id="detailParentDiv">
        <img src={poster} alt={title} title={title} />
        <div id="detailData">
          <h3 id="detailTitle">{title}</h3>
          <h5 id="detailYear">{year}</h5>
          <ul id="detailGenres">
            {genres.map((genre, i) => {
              return (
                <li id="detailGenre" key={i}>
                  {genre}
                </li>
              );
            })}
          </ul>
          <p id="detailSummary">{summary}...</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;

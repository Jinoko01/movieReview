import React from "react";
import "../style/Movie.css";

const Movie = ({ year, title, summary, poster, genres }) => {
  return (
    <div id="movieParentDiv">
      <img src={poster} alt={title} title={title} />
      <div id="movieData">
        <h3 id="movieTitle">{title}</h3>
        <h5 id="movieYear">{year}</h5>
        <p id="movieSummary">{summary}</p>
      </div>
    </div>
  );
};

export default Movie;

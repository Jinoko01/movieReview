import React from "react";
import "../style/Movie.css";

const Movie = ({ year, title, summary, poster, genres }) => {
  return (
    <div id="movieParentDiv">
      <img src={poster} alt={title} title={title} />
      <div id="movieData">
        <h3 id="movieTitle">{title}</h3>
        <h5 id="movieYear">{year}</h5>
        <ul id="movieGenres">
          {genres.map((genre, i) => {
            return (
              <li id="movieGenre" key={i}>
                {genre}
              </li>
            );
          })}
        </ul>
        <p id="movieSummary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
};

export default Movie;

import React, { useEffect, useState } from "react";
import Loading from "./pages/Loading";
import axios from "axios";
import Movie from "./pages/Movie";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios
      .get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
      .then((res) => {
        setMovieList(res.data.data.movies);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="appContainer">
      {loading ? (
        <Loading />
      ) : (
        <div id="appMovies">
          {movieList.map((movie, i) => {
            return (
              <Movie
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                key={i}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;

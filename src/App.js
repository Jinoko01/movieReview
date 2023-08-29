import React, { useEffect, useState } from "react";
import Loading from "./pages/Loading";
import axios from "axios";
import Movie from "./pages/Movie";

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
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {movieList.map((ele, i) => {
            return (
              <Movie
                year={ele.year}
                title={ele.title}
                summary={ele.summary}
                poster={ele.medium_cover_image}
                genres={ele.genres}
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

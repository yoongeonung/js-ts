import React, { useEffect, useState } from "react";

const App4 = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);


  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => {
            return (
              <div key={movie.id}>
                <h2>{movie.title}</h2>
                  <img src={movie.medium_cover_image}/>
                  <ul>
                      {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
                  </ul>
                <p>{movie.summary}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App4;

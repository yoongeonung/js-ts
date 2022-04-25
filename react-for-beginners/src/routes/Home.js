import React from "react";
import { useEffect, useState } from "@types/react";
import Movie from "../components/Movie";

const Home = () => {
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
              <Movie
                key={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                genres={movie.genres}
                summary={movie.summary}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;

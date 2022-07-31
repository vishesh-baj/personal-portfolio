import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import SearchIcon from "./Search.svg";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [moviesSearch, setmoviesSearch] = useState("");

  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=a5f0f582";

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(moviesSearch);
  }, [moviesSearch]);

  const handleChange = (e) => {
    setmoviesSearch(e.target.value);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          name=""
          id=""
          placeholder="search for movies"
          value={moviesSearch}
          onChange={handleChange}
        />
        <img onClick={() => {}} src={SearchIcon} alt="Search" />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Card key={movie.Title} movie1={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import "../index.css";
import Movie from "./Movie";
import Search from "./Search";

// set api details
const apiKey = 'cca94a2';
const apiUrl = "https://www.omdbapi.com/?s=disney&apikey=" + apiKey; 

// set up app to fetch movie details from api
const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
      });
  }, []);

  // get entries from users search
  const search = (searchKey) => {
    fetch(`https://www.omdbapi.com/?s=${searchKey}&apikey=${apiKey}`).then(response => response.json()).then(result => setMovies(result.Search))
  };
    
  return (
    <div className="App">
      <Search search={search}/>
      <div className="movies">
        {movies.map((movie, index) => (<Movie key={index} movie={movie}/>))}
      </div>
    </div>
  );
};

export default App;

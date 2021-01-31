import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

// set image placeholder
const placeholderImage = "https://tse2.mm.bing.net/th?id=OIP.wuV4d9BllxMJ2u90aDgv_QHaFj&pid=Api";

const MovieDetails = () => {

  // get movie details
  const [movie, setMovie ] = useState([]);

    let { id } = useParams();
    const apiKey = "cca94a2";

    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`).then(response => response.json()).then(result => setMovie(result))

    // check if movie has an image, use placeholder if not
    const poster = movie.Poster === "N/A" ? placeholderImage : movie.Poster;

  return (
    <div>
      <Link to = {""} >
        <h2 id="back">BACK</h2>
      </Link>

      <div className="movies" key={movie.imdbID}>
        <div>
          <img src={poster} alt={movie.Title} id="marginLeft"/>
          <h2 id="details">{movie.Title}</h2>
          <p><strong>Category:</strong> {movie.Type}</p>
          <p><strong>Release Date:</strong> {movie.Released}</p>
          <p><strong>Length:</strong> {movie.Runtime}</p>
          <p><strong>Genre:</strong>{movie.Genre}</p>
          <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <h3 id="plot">{movie.Plot}</h3>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
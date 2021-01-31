import React from "react";
import { Link } from "react-router-dom";

// set image placeholder
const placeholderImage = "https://tse2.mm.bing.net/th?id=OIP.wuV4d9BllxMJ2u90aDgv_QHaFj&pid=Api";

const Movie = ({ movie }) => {

    // check if movie has an image, use placeholder if not
    const poster = movie.Poster === "N/A" ? placeholderImage : movie.Poster;

  return (
    <div className="movie" key={movie.imdbID}>
      <Link to = {"/movie/"+movie.imdbID} >
        <img src={poster} alt={movie.Title}/>
        <h2>{movie.Title}</h2>
      </Link>
    </div>
  );
};

export default Movie;
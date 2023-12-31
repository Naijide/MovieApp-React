import React from "react";

const MovieCard = ({ movie }) => {
    //console.log(movie.Year)
    return (
        <div className="movie">
          <div>
            <p>{movie.Year !== 'N/A' ? movie.Year : 'Year not found'}</p>
            </div>
          <div>
            <img 
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} 
              alt={movie.Title}/> 
          </div>
          <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
          </div>

        </div>
    )
}

export default MovieCard
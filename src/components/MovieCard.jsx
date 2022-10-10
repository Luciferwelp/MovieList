import React from "react";

const MovieCard = ({ movie, list, addMovie,removeMovie }) => {
  const inWatchList = list.filter((mov) => {
    return mov.id === movie.id;
  });

  const button =
    inWatchList.length === 0 ? (
      <button onClick={() => addMovie(movie)}>Add Movie</button>
    ) : (
      <button onClick={() => removeMovie(movie)}>Remove Movie</button>
    );

  return (
    <div className="movieCard">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="Movie_Image"
          className="movieImg"
        />
      </div>
      <div className="titleContainer">
        <h3 className="movieTitle">{movie.original_title}</h3>

      </div>
      {button}
    </div>
  );
};

export default MovieCard;

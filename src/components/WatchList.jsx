import React from "react";
import MovieCard from "./MovieCard";

const WatchList = ({ list, removeMovie }) => {
  const movieDisplay = 
    list.map((movie, index) => {
    return <MovieCard movie={movie} list={list} removeMovie={removeMovie} />;
  });

  return (
    <div className="watchList">
      <h1>My Watch List</h1>
      <div className="movieContainer">{movieDisplay}</div>
    </div>
  );
};

export default WatchList;

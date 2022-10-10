import React from "react";
import MovieCard from "./MovieCard";


const MovieScreen = ({list, page, setPage, movieList, addMovie, removeMovie}) => {
    const decrement = () => setPage(page - 1);
    const increment = () => setPage(page + 1);

    const movieDisplay = movieList.map((movie, index) => {
        return <MovieCard addMovie={addMovie} movie={movie} list={list} removeMovie={removeMovie}/>
    });

    return (
        <div className="page">
            <h1>Dylan's Movie Page</h1>
            <h3>Add a movie to watchlist</h3>
            <div className="btnContainer">
                <button onClick={page !== 1 &&decrement}>Previous</button>
                <button onClick={increment}>Next</button>
            </div>
            <div className="movieDisplayContainer">
                {movieDisplay}
            </div>
            <div className="btnContainer">
            <button onClick={page !== 1 &&decrement}>Previous</button>                <button onClick={increment}>Next</button>
            </div>
        </div>
    );
};

export default MovieScreen
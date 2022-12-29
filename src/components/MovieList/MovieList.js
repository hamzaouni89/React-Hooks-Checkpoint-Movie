import React from 'react'
import MovieCard from '../MovieCard/MovieCard'


const MovieList = ({ movies,handleDelete }) => {
    return (
        <div className="container">
            <div className="row ml-5">
                {
                    movies.map((movie, index) => <MovieCard movie={movie} key={index} handleDelete={handleDelete}/>)
                }
            </div>
        </div>
    )
}

export default MovieList

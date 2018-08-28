import React from "react";
import MovieItem from "../components/MovieItem";
import { connect } from 'react-redux';

const Movies = ({ movies }) => (
  <div>
    {movies.map(movie => (
      <MovieItem key={movie.id} movieInfo={movie} />
    ))}
  </div>
);

const MSTP = state => {
  return {
    movies: state.movies
  }
}

export default connect(MSTP)(Movies);

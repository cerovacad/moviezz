import React from "react";
import MovieItem from "../components/MovieItem";
import { connect } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";


const styles = {
  flex: {
    display: "flex",
    flexWrap: "wrap"
  }
};

const Movies = ({ classes, movies }) => (
  <div className={ classes.flex }>
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

export default connect(MSTP)(withStyles(styles)(Movies));

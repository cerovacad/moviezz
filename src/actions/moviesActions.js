import { createAction } from "redux-actions";
// import axios from 'axios'

export const fetchMovies = createAction("FETCH_MOVIES");

export const fetchMoviesAsync = () => {
  return (dispatch) => {
    // axios
    dispatch(fetchMovies())
  }
}
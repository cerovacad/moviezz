import { createAction } from "redux-actions";
// import axios from 'axios'

export const fetchActors = createAction("FETCH_ACTORS");

export const fetchActorsAsync = () => {
  return (dispatch) => {
    // axios
    dispatch(fetchActors())
  }
}
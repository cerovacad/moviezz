import { createAction } from "redux-actions";
// import axios from 'axios'

export const auth = createAction("AUTH");

export const authAsync = () => {
  return (dispatch) => {
    // axios
    dispatch(authAsync())
  }
}
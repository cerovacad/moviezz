import { createStore, applyMiddleware, combineReducers } from "redux";
import moviesReducer from "../reducers/moviesReducer";
import actorsReducer from "../reducers/actorsReducer";
import logger from "redux-logger";
// import thunk from "redux-thunk";

const rootReducer = combineReducers({
  movies: moviesReducer,
  actors: actorsReducer
});

export default createStore(rootReducer, applyMiddleware(logger));

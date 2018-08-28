import { handleActions } from "redux-actions";
import { fetchMovies } from "../actions/moviesActions";

const defState = [
  {
    id: 1,
    title: "Avatar",
    description:
      "Reason hope abstract justice superiority virtues enlightenment against prejudice transvaluation society salvation self god. ",
    genre: "Fantasy/Science",
    release_year: "2009",
    length: "2h 42m",
    created_at: "123",
    updated_at: "123",
    url: "http"
  },
  {
    id: 2,
    title: "Qweqwe",
    description:
      "Reason hope abstract justice superiority virtues enlightenment against prejudice transvaluation society salvation self god. ",
    genre: "Thriller",
    release_year: "2013",
    length: "3h 12m",
    created_at: "123",
    updated_at: "123",
    url: "http"
  }
];

export default handleActions(
  {
    [fetchMovies]: (state, { payload }) => {
      return state;
    },
    
  },
  defState
);

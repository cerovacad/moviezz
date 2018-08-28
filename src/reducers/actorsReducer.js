import { handleActions } from "redux-actions";
import { fetchActors } from "../actions/actorsActions";

const defState = [
  {
    id: 1,
    first_name: "Zoe",
    last_name: "Saldana",
    born: "1978-06-19",
    biography: "QweReason hope abstract justice superiority virtues enlightenment against prejudice transvaluation society salvation self god. Reason hope abstract justice superiority virtues enlightenment against prejudice transvaluation society salvation self god. ",
    created_at: "132",
    updated_at: "123",
    url: "http"
  },
  {
    id: 2,
    first_name: "Joe",
    last_name: "Basadas",
    born: "1912-11-19",
    biography: "Qwe",
    created_at: "132",
    updated_at: "123",
    url: "http"
  },
  {
    id: 3,
    first_name: "Qwe",
    last_name: "Zxcxzx",
    born: "1238-06-09",
    biography: "Qwe",
    created_at: "132",
    updated_at: "123",
    url: "http"
  },
  {
    id: 4,
    first_name: "Zoe",
    last_name: "Saldana",
    born: "1978-06-19",
    biography: "Qwe",
    created_at: "132",
    updated_at: "123",
    url: "http"
  },
  {
    id: 5,
    first_name: "Zoe",
    last_name: "Saldana",
    born: "1978-06-19",
    biography: "Qwe",
    created_at: "132",
    updated_at: "123",
    url: "http"
  },
  {
    id: 6,
    first_name: "Zoe",
    last_name: "Saldana",
    born: "1978-06-19",
    biography: "Qwe",
    created_at: "132",
    updated_at: "123",
    url: "http"
  }
];

export default handleActions(
  {
    [fetchActors]: (state, { payload }) => {
      return state;
    }
  },
  defState
);

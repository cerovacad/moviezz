import { handleActions } from "redux-actions";
import { auth } from "../actions/authActions";

const defState = null

export default handleActions(
  {
    [auth]: (state, { payload }) => {
      return payload;
    }
  },
  defState
);

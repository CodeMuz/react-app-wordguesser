import { FETCH_HIGHSCORES } from "../actions";

export default (state = [], action: any) => {
  switch (action.type) {
    case FETCH_HIGHSCORES:
      return action.payload;
    default:
      return state;
  }
};

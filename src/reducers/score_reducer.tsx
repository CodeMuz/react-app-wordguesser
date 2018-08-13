import { GAME_OVER, NEW_WORD } from "../actions";

export default (state = -1, action: any) => {
  switch (action.type) {
    case NEW_WORD:
      return state + 1;
    case GAME_OVER:
      return -1;
    default:
      return state;
  }
};

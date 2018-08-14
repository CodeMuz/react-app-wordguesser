import { GAME_OVER, NEW_WORD } from "../actions";

const DEFAULT_ERRORS_ALLOWED = 10;

export default (state: number = DEFAULT_ERRORS_ALLOWED, action: any) => {
  switch (action.type) {
    case GAME_OVER:    
      return DEFAULT_ERRORS_ALLOWED;
    case NEW_WORD:
      return state;
    default:
      return state;
  }
};

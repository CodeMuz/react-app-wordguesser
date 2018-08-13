import { GAME_OVER, NEW_LETTER, NEW_WORD } from "../actions";

const letterReducer = (state: string = "", action: any) => {
  switch (action.type) {
    case NEW_LETTER:
      const letter = action.payload.toUpperCase();
      if (state.includes(letter)) {
        return state;
      }
      return state + letter;
    case NEW_WORD:
      return "";
    case GAME_OVER:
      return "";
    default:
      return state;
  }
};

export default letterReducer;

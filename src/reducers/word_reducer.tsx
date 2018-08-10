import { NEW_WORD } from "../actions";

export const wordReducer = (state = [], action: any) => {
  switch (action.type) {
    case NEW_WORD:
      return action.payload;
    default:
      return state;
  }
};

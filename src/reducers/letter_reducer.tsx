import { NEW_LETTER } from "../actions";

const letterReducer = (state = [], action: any) => {
  switch (action.type) {
    case NEW_LETTER:
      return [...state, action.payload.toUpperCase()];
    default:
      return state;
  }
};

export default letterReducer;

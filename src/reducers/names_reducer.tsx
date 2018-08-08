import { SET_NAME } from "../actions";

export const namesReducer = (state: any = [], action: any) => {
  const word = "LOVE";
  switch (action.type) {
    case SET_NAME:
      const letter = action.payload.toUpperCase(0);
      if (word.includes(letter)) {
        const foundLetter = { letter: 'Correct! It does contain letter: ' + letter, position: word.indexOf(letter) + 1 };
        return [...state, foundLetter];
      } else {
        return [...state,{letter:'Does not contain letter: ' + letter,position:-1}];
      }
    default:
      return state;
  }
};

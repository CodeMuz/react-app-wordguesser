import { GAME_OVER, GUESS_LETTER, GUESS_WORD } from "../actions";

export const namesReducer = (
  state: any = { errors: 0, letters: [] },
  action: any
) => {
  // global.console.log((global as any).word);
  switch (action.type) {
    case GUESS_LETTER:
      const letter = action.payload.toUpperCase(0);
      if ((global as any).word.includes(letter)) {
        const foundLetter = {
          correct: true,
          letter,          
          position: (global as any).word.indexOf(letter) + 1
        };
        return {
          errors: state.errors,
          letters: [...state.letters, foundLetter]
        };
      } else {
        return {
          errors: state.errors + 1,
          letters: [
            ...state.letters,
            {
              correct: false,
              letter,
              position: -1,              
            }
          ]
        };
      }
    case GUESS_WORD:
      if (action.payload.toUpperCase() === (global as any).word) {
        (global as any).alert("YOU WIN!");
        (global as any).word = (global as any).generateNewWord();
        return { errors: 0, letters: [] };
      } else {
        (global as any).alert("Sorry wrong word, Try again");
        return {
          errors: state.errors + 1,
          letters: [...state.letters]
        };
      }
    case GAME_OVER:
      (global as any).word = (global as any).generateNewWord();
      return { errors: 0, letters: [] };
      (global as any).alert("The word was: " + (global as any).word);
    default:
      return state;
  }
};

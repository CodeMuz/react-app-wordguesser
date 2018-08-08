import { GAME_OVER, GUESS_LETTER, GUESS_WORD } from "../actions";

const word = (global as any).word;
export const namesReducer = (
  state: any = { errors: 0, letters: [] },
  action: any
) => {
  // global.console.log((global as any).word);
  switch (action.type) {
    case GUESS_LETTER:
      const letter = action.payload.toUpperCase(0);

      if (word.includes(letter)) {
        const locations = [];
        let i = 0;
        for (i = 0; i < word.length; i++) {
          if (word[i] === letter) {
            locations.push(i);
          }
        }

        const foundLetters: any = [];

        locations.map((index: number) => {
          foundLetters.push({
            correct: true,
            letter,
            position: index + 1
          });
        });

        return {
          errors: state.errors,
          letters: [...state.letters, ...foundLetters]
        };
      } else {
        return {
          errors: state.errors + 1,
          letters: [
            ...state.letters,
            {
              correct: false,
              letter,
              position: -1
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
      return { errors: 0, letters: [] };
      (global as any).alert("The word was: " + word);
      (global as any).word = (global as any).generateNewWord();
    default:
      return state;
  }
};

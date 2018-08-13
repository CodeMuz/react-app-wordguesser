export const NEW_LETTER = "NEW_LETTER";
export const NEW_WORD = "NEW_WORD";
export const UPDATE_SCORE = "UPDATE_SCORE";
import Dictionary from "../dictionary";

interface InterfaceNewLetter {
  type: typeof NEW_LETTER;
  payload: string;
}

interface InterfaceNewWord {
  type: typeof NEW_WORD;
  payload: string;
}

export const newLetter = (letter: string): InterfaceNewLetter => {
  return {
    payload: letter,
    type: NEW_LETTER
  };
};

export const newWord = (previous?: string): InterfaceNewWord => {
  return {
    payload: Dictionary.getNewWord(previous),
    type: NEW_WORD
  };
};

// export const updateScore = (wrongLetters: string[], wordLength: number) => {
  
//   const score = 1 - wrongLetters.length / (wrongLetters.length + wordLength);

//   return {
//     payload: score,
//     type: UPDATE_SCORE
//   };
// };

export const updateScore = () => {
  return {
    payload:'',
    type: UPDATE_SCORE
  }
}
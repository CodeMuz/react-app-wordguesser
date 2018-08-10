export const GUESS_LETTER = "GUESS_LETTER";
export const GAME_OVER = "GAME_OVER";
export const NEW_LETTER = "NEW_LETTER";
export const NEW_WORD = 'NEW_WORD';
import Dictionary from './dictionary';

interface InterfaceSetName {
  type: typeof GUESS_LETTER;
  payload: string;
}

export const guessLetter = (name: string): InterfaceSetName => {
  return {
    payload: name,
    type: GUESS_LETTER
  };
};

export const resetGame = () => {
  return {
    payload: "",
    type: GAME_OVER
  };
};

export const newLetter = (letter: string) => {
  return {
    payload: letter,
    type: NEW_LETTER
  };
};


export const newWord = () => {
  return {
    payload: Dictionary.getNewWord(),
    type: NEW_WORD
  }  
}
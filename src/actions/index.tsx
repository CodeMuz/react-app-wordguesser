export const NEW_LETTER = "NEW_LETTER";
export const NEW_WORD = "NEW_WORD";
export const GAME_OVER = "GAME_OVER";
import axios from "axios";
import Dictionary from "../dictionary";
const ROOT_URL = "http://localhost:1234";

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

export const gameOver = (score: number) => {
  global.console.log(score);
  if(score > 0){
    axios
    .post(`${ROOT_URL}/highscore/create`, {
      highscore: score,
      name: "Murray"
    })
    .then((result: any) => {
      // Show Highscore page with history callback to gameOver
      return;
    })
    .catch(error => {
      // throw error
      throw error;
    });
  }  
  return {
    payload: "",
    type: GAME_OVER
  };
};

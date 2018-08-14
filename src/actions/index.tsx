export const NEW_LETTER = "NEW_LETTER";
export const NEW_WORD = "NEW_WORD";
export const GAME_OVER = "GAME_OVER";
export const FETCH_HIGHSCORES = "FETCH_HIGHSCORES";

import axios from "axios";
import fetch from "cross-fetch";
import Dictionary from "../dictionary";
const ROOT_URL = "http://localhost:1234/highscore";

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
  if (score > 0) {
    axios
      .post(`${ROOT_URL}/create`, {
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

const recieveHighScores = (highscores: any) => {  
  global.console.log(highscores);
  return {
    payload: highscores,
    type: FETCH_HIGHSCORES
  };
};

export const getHighScores = () => {
  return (dispatch: any) => {
    return fetch(`${ROOT_URL}/all`).then((response) => {
      if (response.status !== 200) {        
        return;
      }
      return response.json();
    }).then(response => {
      global.console.log(response);
      dispatch(recieveHighScores(response))
    });
  };
};

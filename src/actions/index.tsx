export const NEW_LETTER = "NEW_LETTER";
export const NEW_WORD = "NEW_WORD";
export const GAME_OVER = "GAME_OVER";
export const FETCH_HIGHSCORES = "FETCH_HIGHSCORES";
export const SAVE_SCORE = "SAVE_SCORE";

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

export const gameOver = () => {
  return {
    payload: "",
    type: GAME_OVER
  };
};

export const saveScore = (score: number, name: string, word:string, callback: any) => {
  return (dispatch: any) => {
    axios
      .post(`${ROOT_URL}/create`, {
        highscore: score,
        name
      })
      .then((result: any) => {
        dispatch(gameOver());
        dispatch(newWord(word));
        callback();
      })
      .catch(error => {
        // throw error
        throw error;
      });
  };
};

const recieveHighScores = (highscores: any) => {
  return {
    payload: highscores,
    type: FETCH_HIGHSCORES
  };
};

export const getHighScores = () => {
  return (dispatch: any) => {
    return fetch(`${ROOT_URL}/all`)
      .then(response => {
        if (response.status !== 200) {
          return;
        }
        return response.json();
      })
      .then(response => {
        dispatch(recieveHighScores(response));
      });
  };
};

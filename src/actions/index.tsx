export const NEW_LETTER = "NEW_LETTER";
export const NEW_WORD = "NEW_WORD";
export const GAME_OVER = "GAME_OVER";
export const FETCH_HIGHSCORES = "FETCH_HIGHSCORES";
export const SAVE_SCORE = "SAVE_SCORE";
export const IS_HIGHSCORE = "IS_HIGHSCORE";

import axios from "axios";
import fetch from "cross-fetch";
import Dictionary from "../dictionary";

// const ROOT_URL = "http://localhost:1234";
const ROOT_URL = "https://wordsearchapi.xyz";
const HIGHSCORE_RESOURCE_PATH = '/highscore';
const API_URL = `${ROOT_URL}${HIGHSCORE_RESOURCE_PATH}`;

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

export const saveScore = (
  score: number,
  name: string,
  word: string,
  callback: any
) => {
  return (dispatch: any) => {
    axios
      .post(`${API_URL}/create`, {
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

// Synchronous Action after Fetch is complete
const recieveHighScores = (highscores: any) => {
  return {
    payload: highscores,
    type: FETCH_HIGHSCORES
  };
};


export const HIGHSCORES_LOADING = "HIGHSCORES_LOADING";
const highScoreLoading = (bool: boolean) => {
  return {
    isLoading: bool,
    type: HIGHSCORES_LOADING
  };
};

// ASynchronous Action
export const getHighScores = () => {
  return (dispatch: any) => {
    return fetch(`${API_URL}/all`)
      .then(response => {
        if (response.status !== 200) {
          return;
        }
        dispatch(highScoreLoading(true));
        return response.json();
      })
      .then(response => {
        return dispatch(recieveHighScores(response));
      });
  };
};

export const isHighScore = (
  score: number,
  word: string,
  goToSaveScorePage: any
) => {
  return (dispatch: any, getState:any) => {
    dispatch(getHighScores()).then(() => {
      const currentHighscores = getState().highscores;      
      if (currentHighscores !== undefined) {
        if (currentHighscores.length < 10) {
          goToSaveScorePage();
        } else {
          const lowestHighscore =
            currentHighscores[currentHighscores.length - 1].highscore;
          if (score > lowestHighscore) {
            goToSaveScorePage();
          }
        }
      } else {
        dispatch(gameOver());
        dispatch(newWord(word));
      }
    });
  };
};

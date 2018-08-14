import { combineReducers } from "redux";
import errorReducer from "./errors_reducer";
import highscoreReducer from "./highscores_reducer";
import letterReducer from "./letter_reducer";
import scoreReducer from "./score_reducer";
import wordReducer from "./word_reducer";

const rootReducer = combineReducers({
  errors: errorReducer,
  highscores: highscoreReducer,
  letters: letterReducer,
  score: scoreReducer,
  word: wordReducer
});

export default rootReducer;

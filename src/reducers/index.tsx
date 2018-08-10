import { combineReducers } from "redux";
import letterReducer from './letter_reducer';
import scoreReducer from './score_reducer';
import wordReducer from './word_reducer';

const rootReducer = combineReducers({
  letters : letterReducer,
  score: scoreReducer,
  word : wordReducer 
});

export default rootReducer;

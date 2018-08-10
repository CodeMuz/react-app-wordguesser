import { combineReducers } from "redux";
import letterReducer from './letter_reducer';
import wordReducer from './word_reducer';

const rootReducer = combineReducers({
  letters : letterReducer,
  word : wordReducer
});

export default rootReducer;

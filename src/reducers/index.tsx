import { combineReducers } from "redux";
import { gameReducer } from './game_reducer';
import letterReducer from './letter_reducer';

export default combineReducers({
  gameReducer,
  letterReducer
});

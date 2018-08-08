import { combineReducers } from "redux";
import { namesReducer } from './names_reducer';
import { scoreReducer } from './score_reducer';

export default combineReducers({
  namesReducer,
  scoreReducer
});

import { combineReducers } from "redux";
import { SET_NAME } from "../actions";

const namesReducer = (state: any = [], action: any) => {
  // global.console.log(action);
  switch (action.type) {
    case SET_NAME:
      return [...state,action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  namesReducer
});

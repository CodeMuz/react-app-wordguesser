import {SET_NAME} from '../actions';

export const scoreReducer = (state = 0,action:any) => {  
  switch (action.type){
    case SET_NAME:
      if(state === 10){
        return 0;
      }
      return state + 1;    
    default:
      return state;
  }
}
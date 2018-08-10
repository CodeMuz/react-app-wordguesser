import { UPDATE_SCORE } from "../actions";

export default (state = { scoreVal: 0, words: 0 }, action: any) => {
  switch (action.type) {
    case UPDATE_SCORE:
      if (state.scoreVal === 0) {
        return { scoreVal: action.payload * 100, words: 1 };
      } else {
        return {
          scoreVal: (state.scoreVal + action.payload * 100) / 2,
          words: state.words + 1
        };
      }
    default:
      return state;
  }
};

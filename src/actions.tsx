export const GUESS_LETTER = 'GUESS_LETTER';
// export const SET_AGE = 'SET_AGE';
export const GAME_OVER = 'GAME_OVER';
export const GUESS_WORD = 'GUESS_WORD';
// export const GAME_OVER = 'GAME_OVER';

interface InterfaceSetName {
  type: typeof GUESS_LETTER, 
  payload: string
}
// type SetAge = {type: typeof SET_AGE, payload: number}

export const guessLetter = (name: string): InterfaceSetName => {
    return {
      payload:name,
      type:GUESS_LETTER
    }
}


export const guessWord = (name: string) => {
  return {
    payload:name,
    type:GUESS_WORD
  }
}

export const resetGame = () => {
    return {
      payload:'',
      type: GAME_OVER
    }
}

// export const makeGuess = () => {
//   return {
//     payload:'',
//     type: 'MAKE_GUESS'
//   }
// }
// const setAge = (age: number): SetAge => {
//     return {type: SET_AGE, payload: age}
// }

// export type Actions = SetName | SetAge;
export const NEW_LETTER = "NEW_LETTER";
export const NEW_WORD = 'NEW_WORD';
import Dictionary from './dictionary';

// interface InterfaceSetName {
//   type: typeof GUESS_LETTER;
//   payload: string;
// }

export const newLetter = (letter: string) => {
  return {
    payload: letter,
    type: NEW_LETTER
  };
};

export const newWord = (previous:string) => {
  
  global.console.log('few');
  const word = Dictionary.getNewWord(previous);
  global.console.log(word);
  return {
    payload: word,
    type: NEW_WORD
  }  
}
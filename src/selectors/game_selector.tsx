import { createSelector } from "reselect";

const wordSelector = (state: any) => state.word;
const lettersSelector = (state: any) => state.letters;

interface IResult {
  correctLetters: string[];
  wrongLetters: string[];
}

export const result = (word: string, letters: string): IResult => {
  const correctLetters: string[] = word.split("").map(() => " ");
  const wrongLetters: string[] = [];  

  for (const letter of letters) {
    let found = false;
    for (let i = 0; i < word.length; i++) {
      if (letter === word[i]) {
        correctLetters[i] = letter;
        found = true;
      }
    }
    if (found === false) {
      wrongLetters.push(letter);
    }
  }

  return { correctLetters, wrongLetters };
};

export const resultSelector = createSelector(
  wordSelector,
  lettersSelector,
  result
);

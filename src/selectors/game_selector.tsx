import { createSelector } from "reselect";

const wordSelector = (state: any) => state.word;
const lettersSelector = (state: any) => state.letters;

interface IResult {
  correctLetters: string[];
  wrongLetters: string[];
}

const result = (word: string, letters: string): IResult => {
  const correctLetters: string[] = word.split("").map(() => " ");
  const wrongLetters: string[] = [];
  const guess = { correctLetters, wrongLetters };

  for (const letter of letters) {
    let found = false;
    for (let i = 0; i < word.length; i++) {
      if (letter === word[i]) {
        guess.correctLetters[i] = letter;
        found = true;
      }
    }
    if (found === false) {
      guess.wrongLetters.push(letter);
    }
  }

  return guess;
};

export const resultSelector = createSelector(
  wordSelector,
  lettersSelector,
  result
);

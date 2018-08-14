import { mount } from "enzyme";
import * as React from "react";
import { result } from "../../selectors/game_selector";
import { OutputView } from "./output_view";

it("Renders correctly", () => {
  // Properties
  const word = "hello";
  const guessedLetters = "hlp";
  const wrongLetters = "p";

  const score = 0;

  const currentResult = result(word, guessedLetters);

  // Actions
  const newWord = (previous?: string) => "newword";
  const gameOver = (finalScore:number) => { return; }

  const output = mount(
    <OutputView
      gameOver={gameOver}
      result={currentResult}
      word={word}
      newWord={newWord}
      score={score}
      errorsAllowed={5}
      history={jest.fn()}
    />
  );

  // Shows correct letters in the letter boxes
  expect(output.find("input.letterOutput")).toHaveLength(word.length);

  // Shows correct letters in the letter boxes
  expect(output.find('input[value="h"]')).toHaveLength(1);
  expect(output.find('input[value="l"]')).toHaveLength(2);

  // Shows correct number of wrong letters
  expect(output.find("div.wrongLetters span")).toHaveLength(
    wrongLetters.length
  );
});

it("Calls newWord Action when word is correct", () => {

  const mockFunction = jest.fn();
  const word = "complete";
  const output = mount(
    <OutputView
      gameOver={jest.fn()}
      result={{
        correctLetters: word.split(""),
        wrongLetters: []
      }}
      word={word}
      newWord={mockFunction}
      score={0}
      errorsAllowed={5}
      history={jest.fn()}
    />
  );

  output.instance().forceUpdate();
  expect(mockFunction.mock.calls).toHaveLength(1);

});

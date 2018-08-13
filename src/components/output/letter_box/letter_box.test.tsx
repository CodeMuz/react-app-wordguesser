import { mount } from 'enzyme';
import * as React from "react";
import * as ReactDOM from "react-dom";
import LetterBox from "./letter_box";

it("renders without crashing", () => {
  const correctLetters = ["a", "b", "c"];
  const div = document.createElement("div");
  ReactDOM.render(<LetterBox correctLetters={correctLetters} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("loads the correct letters",() => {

  const correctLetters = ["a", "b", "c"];
  
  const letterBox = mount(<LetterBox correctLetters={correctLetters}/>);

  expect(letterBox.find('input')).toHaveLength(3);
  expect(letterBox.find({value:'a'})).toHaveLength(1);
  expect(letterBox.find({value:'x'})).toHaveLength(0);

});
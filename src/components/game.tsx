import * as React from "react";
import HangmanFormWrapper from "./guess_form";
import OutputView from "./output/output_view";

const Game = () => {
  return (
    <div>
      <HangmanFormWrapper />
      <OutputView />
    </div>
  );
};
export default Game;
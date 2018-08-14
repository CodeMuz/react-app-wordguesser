import * as React from "react";
import HangmanFormWrapper from "./guess_form";
import OutputView from "./output/output_view";

const Game = ({history}:any) => {
  return (
    <div>
      <HangmanFormWrapper />
      <OutputView history={history}/>
    </div>
  );
};
export default Game;
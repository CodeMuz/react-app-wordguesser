import * as React from "react";
import { connect } from "react-redux";
import { resetGame } from "../actions";

const mapStateToProps = (state: any) => {
  return {
    game: state.namesReducer
    // errors: state.scoreReducer
  };
};

interface ILetter {
  letter: string;
  position: number;
  correct: boolean;
}

interface IListProps {
  resetGame: () => {};
  game: { letters: ILetter[]; errors: number };
}

const List: React.StatelessComponent<IListProps> = props => {
  const MAX_GUESSED = 10;

  const letterBoxes:string[] = [];
  const length = (global as any).word.length;

  for (let i = 0; i < length; i++) {
    letterBoxes.push('');
  }

  const names = props.game.letters.map((letter: ILetter, index: number) => {
    const letterPos = letter.position;

    const positionString = letterPos !== -1 ? "position:" + letterPos : " ";

    let letterString = "";

    letterBoxes[letterPos - 1] = letter.correct ? letter.letter : "";

    if (letter.correct) {
      letterString = "Correct! It does contain letter: " + letter.letter;
    } else {
      letterString = "Does not contain letter: " + letter.letter;
    }

    return (
      <p key={index}>
        {letterString} {positionString}
      </p>
    );
  });
  
  const letterBoxEle = letterBoxes.map((letter, index) => {
    return <input className="letter" key={index} value={letter} readOnly={true}/>;
  });

  const isGameOver = props.game.errors === MAX_GUESSED - 1 ? "GAME OVER" : "";

  if (props.game.errors === MAX_GUESSED) {
    props.resetGame();
  }

  return (
    <div>
      <h1>Word Length: {(global as any).word.length}</h1>
      <h1>{letterBoxEle}</h1>
      <h1>Guesses: {`${props.game.errors} ${isGameOver}`} / 10</h1>
      <div>{names}</div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  { resetGame }
)(List);

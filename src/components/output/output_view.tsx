import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { gameOver, newWord } from "../../actions";
import { resultSelector } from "../../selectors/game_selector";
import LetterBox from "./letter_box/letter_box";
import Score from "./score";
import WrongLetterBox from "./wrong_letter_box";

const mapStateToProps = (state: any) => {
  return {
    errorsAllowed: state.errors,
    result: resultSelector(state),
    score: state.score,
    word: state.word
  };
};

interface IListProps {
  errorsAllowed: number;
  gameOver: (score: number) => void;
  result: { correctLetters: string[]; wrongLetters: string[] };
  word: string;
  newWord: (word: string) => {};
  score: number;
  history: any;
}

interface IOutputView {
  componentDidUpdate: () => void;
  render: () => {};
}

export class OutputView extends React.Component<IListProps>
  implements IOutputView {
  public componentDidUpdate() {
    const hasWon =
      this.props.word === this.props.result.correctLetters.join("");
    if (hasWon) {
      this.props.newWord(this.props.word);
    }
    if (this.guessesRemaining() === 0) {
      if (this.props.score > 0) {
        this.props.history.push("/savehighscore");
      } else {
        this.props.gameOver(this.props.score);
        this.props.newWord(this.props.word);
      }
    }
  }

  public render() {
    return (
      <div className="outputForm">
        <LetterBox correctLetters={this.props.result.correctLetters} />
        <WrongLetterBox wrongLetters={this.props.result.wrongLetters} />
        <h1>
          Errors Remaining: {this.guessesRemaining()} /{" "}
          {this.props.errorsAllowed}
        </h1>
        <Score score={this.props.score} />
        <Link to="/highscores">HighScores</Link>
      </div>
    );
  }

  public guessesRemaining() {
    return this.props.errorsAllowed - this.props.result.wrongLetters.length;
  }
}

export default connect(
  mapStateToProps,
  { newWord, gameOver }
)(OutputView);

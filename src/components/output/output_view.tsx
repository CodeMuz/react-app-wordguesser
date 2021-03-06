import * as React from "react";
import { connect } from "react-redux";
import { gameOver, isHighScore, newWord } from "../../actions";
import { resultSelector } from "../../selectors/game_selector";
import LetterBox from "./letter_box/letter_box";
import Score from "./score";
import WrongLetterBox from "./wrong_letter_box";

const mapStateToProps = (state: any) => {
  return {
    errorsAllowed: state.errors,
    result: resultSelector(state),
    score: state.score,
    word: state.word,
    highscores: state.highscores
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
  highscores: any;
  isHighScore: any;
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
      this.props.isHighScore(
        this.props.score,
        this.props.word,
        () => {
          this.props.history.push("/savehighscore");
        }
      );
    }
  }

  public render() {
    return (
      <div className="outputForm">
        <LetterBox correctLetters={this.props.result.correctLetters} />
        <WrongLetterBox wrongLetters={this.props.result.wrongLetters} />
        <h1>
          Buzz: {this.guessesRemaining()} /{" "}
          {this.props.errorsAllowed}
        </h1>
        <Score score={this.props.score} />        
      </div>
    );
  }

  public guessesRemaining() {
    return this.props.errorsAllowed - this.props.result.wrongLetters.length;
  }
}

export default connect(
  mapStateToProps,
  { newWord, gameOver, isHighScore }
)(OutputView);

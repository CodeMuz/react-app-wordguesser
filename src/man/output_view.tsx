import * as React from "react";
import { connect } from "react-redux";
import { newWord, updateScore } from "../actions";
import { resultSelector } from "../selectors/game_selector";
import LetterBox from "./letter_box";
import Score from "./score";
import WrongLetterBox from "./wrong_letter_box";

const mapStateToProps = (state: any) => {
  return {
    result: resultSelector(state),
    score: state.score,
    word: state.word
  };
};

interface IListProps {
  result: { correctLetters: string[]; wrongLetters: string[] };
  word: string;
  newWord: (word: string) => {};
  updateScore: (wrongLetters:string[],length:number) => {};
  score: {scoreVal:number,words:number};
}

class List extends React.Component<IListProps> {
  constructor(props: any) {
    super(props);
  }

  public componentDidUpdate() {

    const hasWon = this.props.word === this.props.result.correctLetters.join("");

    if (hasWon) {
      this.props.newWord(this.props.word);
      this.props.updateScore(this.props.result.wrongLetters,this.props.word.length);      
    }
  }

  public render() {    
    return (
      <div>
        <LetterBox correctLetters={this.props.result.correctLetters} />
        <WrongLetterBox wrongLetters={this.props.result.wrongLetters} />        
        <Score score={this.props.score} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { newWord, updateScore }
)(List);

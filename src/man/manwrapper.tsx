import * as React from "react";
import { connect } from "react-redux";
import { guessLetter, guessWord } from "../actions";

interface IMyComponentState {
  letter: string;
  word: string;
}

interface IMyProps {
  guessLetter: (name: string) => any;
  guessWord: (name: string) => any;
  newGame:boolean;
}

class HangmanForm extends React.Component<IMyProps, IMyComponentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      letter: "",
      word: ""
    };
    this.onUpdate = this.onUpdate.bind(this);
    this.onWordUpdate = this.onWordUpdate.bind(this);
    this.componentGuessLetter = this.componentGuessLetter.bind(this);
    this.componentGuessWord = this.componentGuessWord.bind(this);
  }
  

  public getStyles() {
    return {
      color: "blue",
      fontSize: "2em",
      height: "50px",
      width: "50px"
    };
  }

  public getStylesButton() {
    return {
      color: "blue",
      fontSize: "1em",
      height: "100px",
      verticalAlign: 'top',
      width: "100px",      
    };
  }

  public render() {
    return (
      <div>
        <form onSubmit={this.componentGuessLetter}>
          <input
            style={this.getStyles()}
            maxLength={1}
            value={this.state.letter}
            onChange={this.onUpdate}
          />
          <button style={this.getStylesButton()} onClick={this.componentGuessLetter}>
            Guess a Letter
          </button>
        </form>
        <form onSubmit={this.componentGuessWord}>
          <input
            value={this.state.word}
            onChange={this.onWordUpdate}
          />
          <button onClick={this.componentGuessWord}>
            Make A Guess
          </button>
        </form>
      </div>
    );
  }

  private onWordUpdate(evt: any) {
    this.setState({ word: evt.target.value });
  }

  private onUpdate(evt: any) {
    this.setState({ letter: evt.target.value });
  }

  private componentGuessLetter(evt: any) {
    evt.preventDefault();
    this.props.guessLetter(this.state.letter);
    this.setState({
      letter: ""
    });
  }
  private componentGuessWord(evt: any) {
    evt.preventDefault();    
    this.props.guessWord(this.state.word);
    this.setState({word:""});
  }
}

// const mapStateToProps = (state:any) => {
//   return {
//     newGame : (state.namesReducer.letters.length === 0) ? true: false
//   }
// } 
const HangmanFormWrapper = connect(
  null,
  { guessLetter,guessWord }
)(HangmanForm);

export default HangmanFormWrapper;

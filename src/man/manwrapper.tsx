import * as React from "react";
import { connect } from "react-redux";
import { guessLetter, newLetter } from "../actions";

interface IMyComponentState {
  letter: string;
  word: string;
}

interface IMyProps {
  guessLetter: (name: string) => any;
  newLetter: (name: string) => any;
  newGame: boolean;
}

class HangmanForm extends React.Component<IMyProps, IMyComponentState> {
  public input: any = React.createRef();

  constructor(props: any) {
    super(props);
    this.state = {
      letter: "",
      word: ""
    };
    this.onUpdate = this.onUpdate.bind(this);
    this.componentGuessLetter = this.componentGuessLetter.bind(this);

    this.focus = this.focus.bind(this);
  }

  public focus() {
    if (this.input.current) {
      this.input.current.focus();
    }
  }

  public render() {
    return (
      <div>
        <form onSubmit={this.componentGuessLetter}>
          <input
            className="letterInput"
            maxLength={1}
            value={this.state.letter}
            onChange={this.onUpdate}
            ref={this.input}
          />
          <button className="guessLetter" onClick={this.componentGuessLetter}>
            Guess a Letter
          </button>
        </form>
      </div>
    );
  }

  private onUpdate(evt: any) {
    this.setState({ letter: evt.target.value });
  }

  private componentGuessLetter(evt: any) {
    evt.preventDefault();
    this.props.guessLetter(this.state.letter);
    this.props.newLetter(this.state.letter);
    this.setState({
      letter: ""
    });
    this.focus();
  }
}

const HangmanFormWrapper = connect(
  null,
  { guessLetter, newLetter }
)(HangmanForm);

export default HangmanFormWrapper;

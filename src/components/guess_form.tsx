import * as React from "react";
import { connect } from "react-redux";
import { newLetter } from "../actions";

interface IMyComponentState {
  letter: string;  
}

interface IMyProps {
  newLetter: (name: string) => any;
  newGame: boolean;
}

class GuessForm extends React.Component<IMyProps, IMyComponentState> {
  
  public input: any = React.createRef();

  constructor(props: any) {
    super(props);
    this.state = {
      letter: ""
    };
    this.onUpdate = this.onUpdate.bind(this);
    this.componentGuessLetter = this.componentGuessLetter.bind(this);

    this.focus = this.focus.bind(this);    
  }  

  public componentDidMount(){
    this.focus();
  }

  public focus() {
    if (this.input.current) {
      this.input.current.focus();
    }
  }

  public render() {
    return (
      <div>
        <form className="letterForm" onSubmit={this.componentGuessLetter}>
          <input
            className="letterInput"
            maxLength={1}
            value={this.state.letter}
            onChange={this.onUpdate}
            ref={this.input}
            tabIndex={0}
          />
          <button className="guessLetter" onClick={this.componentGuessLetter}>
          &#9654;
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
    this.props.newLetter(this.state.letter);
    this.setState({
      letter: ""
    });
    this.focus();
  }
}

const GuessFormWrapper = connect(
  null,
  { newLetter }
)(GuessForm);

export default GuessFormWrapper;

import * as React from "react";
import { connect } from "react-redux";
import { newWord, saveScore } from "../actions";

interface IScoreState {
  name: string;
}

interface IScoreProps {
  newWord: any;
  score: number;
  word: string;
  saveScore: any;
  history: any;
}
const mapStateToProps = (state: any) => {
  return {
    score: state.score,
    word: state.word
  };
};

class SaveHighscore extends React.Component<IScoreProps, IScoreState> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: ""
    };

    this.SaveHighScore = this.SaveHighScore.bind(this);

    // if(this.props.score < 0){
    //   this.props.history.push('/');
    // }
  }

  public updateName = (evt: any) => {
    this.setState({
      name: evt.target.value
    });
  };

  public SaveHighScore(evt: any) {
    evt.preventDefault();
    
    const { score, word } = this.props;

    this.props.saveScore(score, this.state.name, word, () => {
      this.props.history.push("/highscores");
    });

  }

  public render() {

    const buttonClasses = (this.state.name.length > 2) ? 'show' : 'hide';
    return (
      <form onSubmit={this.SaveHighScore} className="highscoreForm">
        <h1>New HighScore!</h1>
        <label>Enter your name:</label>
        <input value={this.state.name} onChange={this.updateName} maxLength={20}/>
        <button className={buttonClasses}>Submit</button>
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  { newWord, saveScore }
)(SaveHighscore);

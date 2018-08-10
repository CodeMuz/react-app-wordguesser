import * as React from "react";
import { connect } from "react-redux";
import { newWord } from "../actions";
import { resultSelector } from "../selectors/game_selector";

const mapStateToProps = (state: any) => {
  return {
    result: resultSelector(state),
    word: state.word
  };
};

interface IListProps {
  result: { correctLetters: string[]; wrongLetters: string[] };
  word: string;
  newWord:(word:string) => {}
}

class List extends React.Component<IListProps> {
      
  constructor(props:any){
    super(props);
  }

  public componentDidUpdate(){
    if(this.props.result.correctLetters.join('') === this.props.word){
      this.props.newWord(this.props.word);    
    }
  }

  public render(){
    const letterBoxEle = this.props.result.correctLetters.map((letter, index) => {
      return (
        <input className="letter" key={index} value={letter} readOnly={true} />
      );
    });
  
    const wrongLetters = this.props.result.wrongLetters.map((letter, index) => {
      return <span key={index}>{letter}</span>;
    });
  
    return (
      <div>
        <h1>{letterBoxEle}</h1>
        <div className="wrongLetters">{wrongLetters}</div>
      </div>
    );
  }
  
};

export default connect(
  mapStateToProps,
  { newWord }
)(List);

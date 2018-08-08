import * as React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  return {
    letters: state.namesReducer,
    score: state.scoreReducer
  };
};

interface ILetter {
  letter:string,
  position:number
}

const List: React.StatelessComponent = (props: any) => {
  const names = props.letters.map((letter:ILetter, index: number) => {
    const letterPos = letter.position;

    const positionString = (letterPos !== -1)? 'position:'+ letterPos: ' ';

    return <p key={index}>{letter.letter} {positionString}</p>;
  });

  const isGameOver = props.score === 10 ? 'GAME OVER' : '';
  
  return (
    <div>
      <h1>Errors: {`${props.score} ${isGameOver}`}</h1>
      <div>{names}</div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  null
)(List);

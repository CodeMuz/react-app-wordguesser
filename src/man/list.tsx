import * as React from "react";
import { connect } from "react-redux";
import {resetGame} from '../actions';

const mapStateToProps = (state: any) => {
  return {
    game: state.namesReducer,
    // errors: state.scoreReducer
  };
};

interface ILetter {
  letter:string,
  position:number
}

interface IListProps {  
  resetGame: () => {},
  game : {letters:ILetter[],errors:number}
}

const List: React.StatelessComponent<IListProps> = (props) => {

  const MAX_GUESSED = 10;

  const names = props.game.letters.map((letter:ILetter, index: number) => {
    const letterPos = letter.position;

    const positionString = (letterPos !== -1)? 'position:'+ letterPos: ' ';

    return <p key={index}>{letter.letter} {positionString}</p>;
  });

  const isGameOver = props.game.errors === MAX_GUESSED - 1 ? 'GAME OVER' : '';
  
  if(props.game.errors === MAX_GUESSED){
    props.resetGame();
  }

  return (
    <div>
      <h1>Word Length: {(global as any).word.length}</h1>
      <h1>Errors: {`${props.game.errors} ${isGameOver}`}</h1>
      <div>{names}</div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  {resetGame}
)(List);

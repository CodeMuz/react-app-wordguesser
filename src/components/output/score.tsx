import * as React from "react";

interface IScore {
  score: number;
}

const Score: React.SFC<IScore> = (props: any) => {  
    return (
      <div className="score">
        <h2>Correct Words: <span id="score">{props.score}</span></h2>
      </div>
    );  
};

export default Score;

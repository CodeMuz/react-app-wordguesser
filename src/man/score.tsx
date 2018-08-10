import * as React from "react";

interface IScore {
  score: { scoreVal: number; words: number };
}

const Score: React.SFC<IScore> = (props: any) => {
  if (props.score.scoreVal > 0) {
    return (
      <div className="score">
        <h2>Correct Letters: {props.score.scoreVal.toFixed(2)}%</h2>
        <h2>Words: {props.score.words}</h2>
      </div>
    );
  } else {
    return <h1 />;
  }
};

export default Score;

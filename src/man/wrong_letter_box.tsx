import * as React from "react";

interface ILetterProps {
  wrongLetters:string[]
}

const WrongLetterBox: React.SFC<ILetterProps> = (props: any) => {
  
  const letterBoxEle = props.wrongLetters.map((letter: string[], index: number) => {
    return <span key={index}>{letter}</span>;
  });

  return <div className="wrongLetters">{letterBoxEle}</div>;
  
};

export default WrongLetterBox;

import * as React from "react";

interface ILetterProps {
  correctLetters:string[] // Looks like ['','l','y']
}

const LetterBox: React.SFC<ILetterProps> = (props: any) => {
  
  const letterBoxEle = props.correctLetters.map((letter: string[], index: number) => {
    return (
      <input
        className="letterOutput"
        key={index}
        value={letter}
        readOnly={true}
      />
    );
  });

  return <h1>{letterBoxEle}</h1>;
};

export default LetterBox;

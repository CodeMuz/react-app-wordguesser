import * as React from 'react';

// export interface InterfaceMyStatelessComp {  
//   onTodoClick : (name:string) => {}
// }

const Man: React.StatelessComponent = (props:any) => {

  const onClick = () => {
    global.console.log('ok');
    props.onTodoClick("muz" + Math.random());
  };

  global.console.log(props.people);
  const names = props.people.map((name:string) => {
    return (
      <p key={name}>{name}</p>
    )
  });

  return (
    <div>
      <h1>{names}</h1>
    <button
      onClick={onClick}
    >okofewkofew</button>
    </div>
  );
};

export default Man;
import * as React from 'react';

export interface InterfaceMyStatelessComp {
  name?:string,
  age?:number
}

const Man:React.StatelessComponent<InterfaceMyStatelessComp> = (props) => {
  return (
    <button>{props.children}</button>
  )
}

export default Man;
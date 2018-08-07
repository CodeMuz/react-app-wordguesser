import * as React from 'react';

export interface InterfaceMyStatelessComp {
  name:string,
  age:number
}
const statelessComp : React.StatelessComponent<InterfaceMyStatelessComp> = (props) => {
  return (
    <div>{props.name} {props.age}stateless</div>
  )
};
export default statelessComp;
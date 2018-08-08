import * as React from "react";
import {connect} from 'react-redux';

const mapStateToProps = (state:any) => {
  return {
    people: state.namesReducer
  };
};

const List: React.StatelessComponent = (props:any) => {

  const names = props.people.map((name: string,index:number) => {
    return <p key={index}>{name}</p>;
  });

  return (
    <div>{names}</div>
  )
}

export default connect(mapStateToProps,null)(List);
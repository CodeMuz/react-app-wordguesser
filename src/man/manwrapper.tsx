import * as React from "react";
import { connect } from "react-redux";
import { setName } from "../actions";
// import Man from './man';

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     onTodoClick: (name: string) => {
//       dispatch(setName(name));
//     }
//   };
// };

interface IMyComponentState {
  value: string;
}

interface IMyProps {
  setName : (name:string) => any
}

class AddPerson extends React.Component<IMyProps, IMyComponentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: ""
    };
    this.onUpdate = this.onUpdate.bind(this);
    this.savePerson = this.savePerson.bind(this);
  }

  public render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.onUpdate} />
        <button onClick={this.savePerson}>Save Person</button>
      </div>
    );
  }

  private onUpdate(evt: any) {
    this.setState({ value: evt.target.value });
  }

  private savePerson(){
    global.console.log(this.state.value);
    this.props.setName(this.state.value);
  }
}

// const mapStateToProps = (state: any) => {
//   return {
//     people: state.namesReducer
//   };
// };

const ManWrapper = connect(
  null,
  { setName }
)(AddPerson);

export default ManWrapper;

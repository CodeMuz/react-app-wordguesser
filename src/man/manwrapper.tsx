import * as React from "react";
import { connect } from "react-redux";
import { setName } from "../actions";

interface IMyComponentState {
  value: string;
}

interface IMyProps {
  setName: (name: string) => any;
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

  public getStyles(){
    return {
      color:'blue',
      fontSize:'2em',
      height:'100px',
      width:'100px'     
    };
  }

  public getStylesButton(){
    return {
      color:'blue',
      fontSize:'1em',
      height:'100px',
      width:'100px'     
    };
  }

  public render() {
    return (
      <div>
        <form onSubmit={this.savePerson}>
          <input style={this.getStyles()} maxLength={1} value={this.state.value} onChange={this.onUpdate} />
          <button style={this.getStylesButton()} onClick={this.savePerson}>Make a guess</button>
        </form>
      </div>
    );
  }

  private onUpdate(evt: any) {
    this.setState({ value: evt.target.value });
  }

  private savePerson(evt:any) {
    evt.preventDefault();
    this.props.setName(this.state.value);
    this.setState({
      value:''
    });
  }
}

const ManWrapper = connect(
  null,
  { setName }
)(AddPerson);

export default ManWrapper;

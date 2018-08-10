import * as React from "react";
import "./App.css";

import {connect} from 'react-redux';
import {newWord} from './actions';
import List from "./man/list";
import HangmanFormWrapper from "./man/manwrapper";

interface IAppProps {
  newWord(previous?:string):string;
}

class App extends React.Component<IAppProps> {
  
  constructor(props:any){
    super(props);
  }

  public componentDidMount(){
    this.props.newWord();
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Word Guesser Game</h1>
        </header>

        <HangmanFormWrapper />
        <List />
      </div>
    );
  }
}

export default connect(null, {newWord})(App);

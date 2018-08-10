import * as React from "react";
import "./App.css";

import List from "./man/list";
import HangmanFormWrapper from "./man/manwrapper";
import {newWord} from './actions';
import {connect} from 'react-redux';

class App extends React.Component {

  componentDidMount(){
    newWord();
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

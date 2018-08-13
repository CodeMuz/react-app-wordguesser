import * as React from "react";
import "./App.css";

import {connect} from 'react-redux';
import {newWord} from '../actions';
import HangmanFormWrapper from "../components/guess_form";
import OutPutView from "../components/output/output_view";

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
        <OutPutView />
      </div>
    );
  }
}

export default connect(null, {newWord})(App);

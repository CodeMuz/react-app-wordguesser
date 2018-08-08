import * as React from "react";
import "./App.css";

// import logo from "./logo.svg";
import List from "./man/list";
import ManWrapper from "./man/manwrapper";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hangman game for Ana</h1>
        </header>

        <ManWrapper />
        <List />
      </div>
    );
  }
}

export default App;

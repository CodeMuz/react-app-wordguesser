import * as React from "react";
import "./App.css";

import logo from "./logo.svg";
import Man2 from './man/man2';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>          
        </header>
        
        <Man2/>
      </div>
    );
  }
}

export default App;

import * as React from "react";
import "./App.css";

import List from "./man/list";
import HangmanFormWrapper from "./man/manwrapper";

(global as any).generateNewWord = () => {
  const words = [
    "scary",
    "macho",
    "bang",
    "rush",
    "clap",
    "impossible",
    "gigantic",
    "incompetent",
    "cast",
    "super"
  ];
  return words[Math.floor(Math.random() * words.length)].toUpperCase();
};

(global as any).word = (global as any).generateNewWord();

global.console.log((global as any).word);
class App extends React.Component {
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

export default App;

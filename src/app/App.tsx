import * as React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { newWord } from "../actions";
import Game from "../components/game";
import HighScores from "../components/highscores";
import "./App.css";

interface IAppProps {
  newWord(previous?: string): string;
}

class App extends React.Component<IAppProps> {
  constructor(props: any) {
    super(props);
  }

  public componentDidMount() {
    this.props.newWord();
  }

  public render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <header className="App-header">
              <h1 className="App-title">
                <Link to="/">WORD BUZZ</Link>
              </h1>
            </header>
            <div className="content">
              <Switch>
                <Route path="/highscores" component={HighScores} />
                <Route path="/" component={Game} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  { newWord }
)(App);

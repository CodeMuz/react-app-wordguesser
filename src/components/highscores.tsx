import * as React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import { SyncLoader } from "react-spinners";
import { getHighScores } from "../actions";

const mapStateToProps = (state: any) => {
  return {
    highscores: state.highscores
  };
};

interface IProps {
  getHighScores: () => {};
  highscores: any;
}

interface IHighState {
  data: any;
}

class HighScore extends React.Component<IProps, IHighState> {
  public componentDidMount() {
    this.props.getHighScores();
  }

  public render() {
    if (this.props.highscores.length > 0) {
      return (
        <div>
          <h1 className="highscoreTitle">HIGH SCORES</h1>
          <table className="highscoreTable">
            <thead>
              <tr>
                <th>NAME</th>
                <th>SCORE</th>
                <th>DATE</th>
              </tr>
            </thead>
            <tbody>
              {this.props.highscores.map((score: any, index: number) => {
                return (
                  <tr key={index}>
                    <td>{score.name}</td>
                    <td>{score.highscore}</td>
                    <td>{new Date(score.date).toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Link to="/" style={{marginTop:'3rem',display:'block',fontSize:'1.1em',color:'black'}}>Go Back</Link>
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="highscoreTitle">HIGH SCORES</h1>
          <div className="pacmanLoader">
            <SyncLoader
              sizeUnit={"px"}
              size={30}
              color={"black"}
              loading={true}
            />
          </div>
        </div>
      );
    }
  }
}

export default connect(
  mapStateToProps,
  { getHighScores }
)(HighScore);

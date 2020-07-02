import React, { Component } from "react";
import { connect } from "react-redux";

export class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
  }
  win = () => {
    this.setState({
      score: this.state.score + 1,
    });
  };

  lose = () => {
    this.setState({
      score: this.state.score - 1,
    });
  };

  render() {
    return (
      <div className="Score">
        <h1>Scoreboard</h1>
        <h2>Player 1</h2>
        <span>{this.state.score}</span>
        <h3>My Matches</h3>

        <button onClick={this.win}>You Win!</button>
        <button onClick={this.lose}>You Lose!</button>
      </div>
    );
  }
}
export default Scoreboard;

import React, { Component } from "react";
import "../App.js";
import { connect } from "react-redux";

class Scoreboard extends Component {
  render() {
    return (
      <div className="Score">
        <h1>Your Score</h1>
        <span>{this.props.score}</span>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { score } = state;
  return { score: score };
}

export default connect(mapStateToProps)(Scoreboard);

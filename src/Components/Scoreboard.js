import React, { Component } from "react";
import "../App.js";
import ReactDOM from "react-dom";
import {connect} from 'react-redux';

class Scoreboard extends Component {
  render() {
    return (
      <div className="Score">
        <h2>Player 1</h2>
        <h1>Your Score</h1>
        <button>Score</button>
      </div>
    );
  }
}
export default Scoreboard;

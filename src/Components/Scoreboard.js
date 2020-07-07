import React, { Component } from "react";
import "../App.js";
import { connect } from "react-redux";

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      title: "Your Score"
    }
  }

  render() {
    return (
      <div className="Score">
        <h1>{this.state.title}</h1>
        <span>{this.props.score}</span>
        <br/>
        <br/>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { score } = state;
  return { score: score };
}

export default connect(mapStateToProps)(Scoreboard);

import React, { Component } from "react";
import BeachCards from "./BeachCards";
import BackCardImage from "./BackCardImage";
import ReactCardFlip from "react-card-flip";

export class cardAnimation extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <BackCardImage>
          <button onClick={this.handleClick}>Click to flip</button>
        </BackCardImage>

        <BeachCards>
          <button onClick={this.handleClick}>Click to flip</button>
        </BeachCards>
      </ReactCardFlip>
    );
  }
}

export default cardAnimation;

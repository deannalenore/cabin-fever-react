import React from "react";
import "./App.css";
import { Jumbotron, Button } from "react-bootstrap";
import Scoreboard from "./Components/Scoreboard";
import BeachCards from "./Components/BeachCards";
import "./Components/BeachCards.css"


function App() {
  return (
    <div className="App">
      <Jumbotron>
        <h1>Cabin Fever</h1>
        <h2>The Quarantine Match Game</h2>
        <p>
          Click the images below to uncover a beautiful scene that you can only
          see from afar. . .for now. Make one match in five attempts, and YOU
          WIN!
        </p>
        <p>
          <Button variant="primary">Let's Go!</Button>
        </p>
      </Jumbotron>
      <Scoreboard />
      <BeachCards />
    </div>
  );
}

export default App;

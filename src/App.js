import React from "react";
import "./App.css";
import { Jumbotron, Button } from "react-bootstrap";
import Scoreboard from "./Components/Scoreboard";
import Board from "./Components/Board/Board";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Jumbotron>
        <h1>Cabin Fever</h1>
        <h2>The Quarantine Match Game</h2>
        <p>
          Click the images below to uncover beautiful scenes that you can only
          see from afar. . .for now. Receive one point for each match to
          complete the game!
        </p>
      </Jumbotron>
      <Scoreboard />
      <Board />
      <Button onClick={() => dispatch({ type: "RESET_SCORE" })}>Reset</Button>
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  score: 0,
  GameInProgress: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === "INCREASE_SCORE") {
    return {
      ...state,
      score: state.score + action.payload,
    };
  }
  return state;
};
// switch (action.type) {
//   case "YOU_WIN":
//     return {
//       ...state,
//       score: state.score + action.payload.points,
//     };
//   case "YOU_LOSE":
//     return {
//       ...state,
//       score: state.score - action.payload.points,
//     };
//   default:
//     return state;
//}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { Component } from "react";
import "./BeachCards.css";

function BeachCards = () {
  const beachCards  = ['./Assets/images/sunrise-rock-beach.jpg', './Assets/images/evening-beach.jpg', './Assets/images/balos-beach.jpg', '.Assets/images/rock-beach.jpg', './Assets/images/sunny-beach.jpg', './Assets/images/beach-of-torregorda.jpg'];
  return (
      <ol>
          {beachCards.map(beachCard => <div>{beachCard}</div>}
      </ol>
  );
}

class BeachCards extends Component {
  render() {
    return (
      <div class="container">
        <img src={BeachCards} alt="" />
        {/*<img
          class="beach-images"
          src={process.env.PUBLIC_URL + "/images/evening-beach.jpg"}
          alt="evening beach"
        />
        <img
          class="beach-images"
          src={process.env.PUBLIC_URL + "/images/balos-beach.jpg"}
          alt="balos beach"
        />
        <img
          class="beach-images"
          src={process.env.PUBLIC_URL + "/images/rock-beach.jpg"}
          alt="rock beach"
        />
        <img
          class="beach-images"
          src={process.env.PUBLIC_URL + "/images/sunny-beach.jpg"}
          alt="sunny beach"
        />
        <img
          class="beach-images"
          src={process.env.PUBLIC_URL + "/images/beach-of-torregorda.jpg"}
          alt="torr beach"
        />*/}
      </div>

    
    
  }
}
//js comment to do flip action:document.querySelector("#myCard").classList.toggle("flip")
export default BeachCards;

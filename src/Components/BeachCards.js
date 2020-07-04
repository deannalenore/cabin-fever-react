import React, { Component } from "react";
import "./BeachCards.css";

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
const BeachImages = [
  {
    title: "ImageOne",
    imageUrl: "./Assets/images/balos-beach.jpg"
  },

  {
    title: "ImageTwo",
    imageUrl: "./Assets/images/beach-of-torregorda.jpg"
  },

  {
  title: "ImageThree",
  imageUrl: "/Assets/images/evening-beach.jpg"
  },

  {
    title: "ImageFour",
    imageUrl:  "./Assets/images/rock-beach.jpg"

  },

  {
    title: "ImageFive",
    imageUrl: "./Assets/images/sunny-beach.jpg"
  },

  {
    title: "ImageSix",
    imageUrl: "./Assets/images/sunrise-rock-beach.jpg"
  }
]

  return (
      <ol>
          {beachCards.map(beachCard => <div>{beachCard}</div>}
      </ol>
  );



//js comment to do flip action:document.querySelector("#myCard").classList.toggle("flip")
export default BeachCards;

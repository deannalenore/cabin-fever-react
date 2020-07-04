import React, { Component } from "react";
import "./BackCardImage.css";

class BackCardImage extends Component {
  render() {
    return (
      <div class="back-image-container">
        <img src={BackCardImage} alt="" />

        {/*<img
        class="back-image"
        src={process.env.PUBLIC_URL + "/backofcard.jpg"}
        alt=""
      />
      <img
        class="back-image"
        src={process.env.PUBLIC_URL + "/backofcard.jpg"}
        alt=""
      />
      <img
        class="back-image"
        src={process.env.PUBLIC_URL + "/backofcard.jpg"}
        alt=""
      />
      <img
        class="back-image"
        src={process.env.PUBLIC_URL + "/backofcard.jpg"}
        alt=""
      />
      <img
        class="back-image"
        src={process.env.PUBLIC_URL + "/backofcard.jpg"}
        alt=""
      />*/}
      </div>
    );
  }
}

export default BackCardImage;

import React, { Component } from "react";
import notFoundImage from "../assets/images/notFound.png";

class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <img className="img-fluid" src={notFoundImage} alt="notFoundImage"/>
      </div>
    );
  }
}

export default NotFound;

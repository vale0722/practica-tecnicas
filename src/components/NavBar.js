import React, { Component } from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";
//import logo from "../assets/images/logo.png";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/info">Info</a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default NavBar;

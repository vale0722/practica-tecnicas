import React, { Component } from "react";
import "./styles/Navbar.css";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a href="/" className=" nav-link navbar-brand">
            Inicio
        </a>
        <a class="nav-link navbar-brand" href="/events">Eventos</a>
        <a class="nav-link navbar-brand" href=""></a>
        <a class="nav-link navbar-brand" href=""></a>
        <a class="nav-link navbar-brand" href=""></a>
        <a class="nav-link navbar-brand" href=""></a>
      </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;

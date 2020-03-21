import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './styles/Home.css';
import partyLogo from '../assets/images/party.png';
import partyLogo2 from '../assets/images/party2.png';


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <img
                src={partyLogo2}
                alt="partyLogo2"
                className="img-fluid CambioTamano mb-2"
              />

              <h1>Event Manager</h1>
              <Link className="btn btn-primary" to="/events">
                Start
              </Link>
            </div>

            <div className="Home__col col-md-8">
              <img
                src={partyLogo}
                alt="partyLogo"
                className="img-fluid CambioTamano mb-2"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

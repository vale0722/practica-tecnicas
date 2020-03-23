import React, { Component } from "react";
import eventImage from "../assets/images/party2.png";
import "./styles/EventItem.css";

class EventItem extends Component {
  render() {
    const { event } = this.props;

    return (
      <div className="card text-left mb-3 border-info">
        <div className="card-body">
          <h2 className="card-title">
          <span className="badge badge-secondary">{event.title}</span>
          </h2>
          <p className="card-text"><strong>Responsable: </strong>{event.responsible}</p>
          <p className="card-text"><strong>Descripcion: </strong>{event.description}</p>
          <p className="card-text"><strong>Fecha: </strong>{event.date}</p>
          <p className="card-text"><strong>Hora: </strong>{event.hour}</p>
          <p className="card-text"><strong>Lugar: </strong>{event.place}</p>
        </div>
      </div>
    );
  }
}

export default EventItem;

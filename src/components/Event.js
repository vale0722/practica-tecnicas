import React, { Component } from "react";
import {Link} from "react-router-dom";

class Event extends Component {
  render() {

    const {event} = this.props;

    return (
      <div className="col-md-4 col-sm-6 col-xs-12">
        <article className="material-card Red">
          <Link to={`/events/${event.eventId}`}>
            <h2>
              <span>{event.title}</span>
              <strong>
                <i className="fa fa-fw fa-magic"></i>
                {event.responsible}
              </strong>
            </h2>
          </Link>
          <div className="mc-content card">
            <span
              className="mc-btn-action
                        danger btn-danger"
              onClick={this.props.removeEvent}
            >
              <i className="fa fa-close"></i>
            </span>
            <div className="mc-description">
              <h4>{event.description}</h4>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Event;

import React, { Component } from "react";
import "./styles/Events.css";
import EventForm from "../components/EventForm";
import * as firebase from "firebase";
import { DB_CONFING } from "../config/config";
import Event from "../components/Event";
import Loader from "../components/Loader";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      form: {
        title: "",
        responsible: "",
        description: "",
        date: "",
        hour: "",
        place: "",
        guest: []
      },
      loading: false,
      error: null
    };
    this.app = firebase.initializeApp(DB_CONFING);
    this.db = this.app
      .database()
      .ref()
      .child("events");

    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null
    });

    try {
      const { events } = this.state;
      await this.db.on("child_added", snap => {
        events.push({
          eventId: snap.key,
          title: snap.val().title,
          description: snap.val().description,
          responsible: snap.val().responsible,
          date: snap.val().date,
          hour: snap.val().hour,
          place: snap.val().place,
        });

        this.setState({
          events
        });
      });

      this.setState({
        loading: false
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  componentWillUnmount() {
    const { events } = this.state;
    this.setState({ events });
  }

  async removeEvent(event, index) {
    await this.db.child(event).remove();

    this.setState({
      events: this.state.events.filter((e, i) => {
        return i !== index;
      })
    });
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit(event, e) {
    e.preventDefault();
    this.db.push().set({
      title: event.title,
      description: event.description,
      responsible: event.responsible,
      date: event.date,
      hour: event.hour,
      place: event.place,
    });

    this.setState({
      form: {
        title: "",
        responsible: "",
        description: "",
        date: "",
        hour: "",
        place: "",
        guest: []
      }
    });
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    }

    if (this.state.error) {
      return (
        <h3 className="text-danger">{`Error: ${this.state.error.message}`}</h3>
      );
    }

    const events = this.state.events.map((event, i) => {
      return (
        <Event
          event={event}
          key={event.eventId}
          removeEvent={() => this.removeEvent(event.eventId, i)}
        />
      );
    });

    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <a href="" className="navbar-brand">
            Eventos
            <span className=" badge badge-pill badge-success ml-2">
              {this.state.events.length}
            </span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3 text-center">
              <EventForm
                onAddEvent={this.handleAddEvent}
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={e => this.handleSubmit(this.state.form, e)}
              ></EventForm>
            </div>
            <div className="col-md-9">
              <div className="row">{events}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;

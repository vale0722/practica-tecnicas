import React, { Component } from "react";
import EventItem from "../components/EventItem";
import Loader from "../components/Loader";
import * as firebase from "firebase";
import { DB_CONFING } from "../config/config";

class Guests extends Component {
  constructor(props) {
    super(props);

    this.app = firebase.initializeApp(DB_CONFING);
    this.dbEvents = this.app
      .database()
      .ref()
      .child("events");

    this.dbGuests = this.app
      .database()
      .ref()
      .child("guests");
  }

  state = {
    event: {
      eventId: "",
      title: "default",
      responsible: "default",
      description: "default",
      date: "default",
      hour: "default",
      place: "default",
      guest: []
    },
    guest: {
      eventId: "",
      nombre: "",
      apellido: "",
      edad: ""
    },
    loading: true,
    error: null
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null
    });

    try {
      let eventItem = {};
      let encontrado = false;

      await this.dbEvents.on("child_added", snap => {
        if (snap.key === this.props.match.params.eventId) {
          eventItem = {
            eventId: snap.key,
            title: snap.val().title,
            description: snap.val().description,
            responsible: snap.val().responsible,
            date: snap.val().date,
            hour: snap.val().hour,
            place: snap.val().place
          };

          encontrado = true;
        }

        if (!encontrado) {
          throw new Error("Evento no encontrado!");
        }
      });

     

      this.setState({
        event: eventItem,
        loading: false
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  handleNewGuest = () => {};

  render() {
    if (this.state.loading) {
      return <Loader />;
    }

    if (this.state.error) {
      return (
        <h3 className="text-danger">{`Error: ${this.state.error.message}`}</h3>
      );
    }

    //return <EventItem event={this.state.event} />;

    return (
      <div className="row">
        <div className="col-md-5">
          <EventItem event={this.state.event} />
        </div>

        <div className="col-md-7">
          <h1>Invitados:</h1>
          <div className="container card">
           
          </div>
        </div>
      </div>
    );
  }
}

export default Guests;

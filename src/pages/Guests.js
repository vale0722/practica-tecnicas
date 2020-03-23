import React, { Component } from "react";
import EventItem from "../components/EventItem";
import Loader from "../components/Loader";
import * as firebase from "firebase";
import { DB_CONFING } from "../config/config";
import GuestForm from "../components/GuestForm";
import Guest from "../components/Guest";

class Guests extends Component {
  constructor(props) {
    super(props);
    if (!firebase.apps.length) {
      this.app = firebase.initializeApp(DB_CONFING);   
    }else{
      this.app = firebase.app();
    }
    
  this.dbEvents = this.app
  .database()
  .ref()
  .child("events");

  this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    event: {
      eventId: "",
      title: "",
      responsible: "",
      description: "",
      date: "",
      hour: "",
      place: "",
    },
    form: {
      guestId: "",
      name: "",
      lastname: "",
      age: "",
      asist: "",
    },
    guests: [],
    loading: false,
    error: null
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: false,
      error: null
    });

    try {
      let eventItem = this.state.event;
      let guests = this.state.guests;
      await this.dbEvents.on("child_added", snap => {
        if (snap.key === this.props.match.params.eventId) {
            eventItem = {
            eventId: snap.key,
            title: snap.val().title,
            description: snap.val().description,
            responsible: snap.val().responsible,
            date: snap.val().date,
            hour: snap.val().hour,
            place: snap.val().place,
          }
         this.dbEvents.child(eventItem.eventId).child('guests').on("child_added", snapG => {
            guests.push({
              guestId: snapG.key,
              name: snapG.val().name,
              lastname: snapG.val().lastname,
              age: snapG.val().age,
              asist: snapG.val().asist,
            });
          });
          };
          this.setState({
            guests
          });
          this.setState({
            event: eventItem,
            loading: false
          });
        });
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };


  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit(guest, e) {
    e.preventDefault();
    let event = this.state.event;
    this.dbEvents.child(event.eventId).child('guests').push().set({
        name: guest.name,
        lastname: guest.lastname,
        age: guest.age,
        asist: guest.asist,
    });
    this.setState({
      form: {
        guestId: "",
        name: "",
        lastname: "",
        age: "",
        asist:"",
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
    
    const guests = this.state.guests.map((guest, i) => {
      return (
        <Guest
          guest={guest}
          key={i}
        />
      );
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="row-md-12">
            <EventItem event={this.state.event} />
            </div>
            <div className="row-md-12">
            <GuestForm  
                onAddGuest={this.handleAddGuest}
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={e => this.handleSubmit(this.state.form, e)}
                event={this.state.event} />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card">
            <div className=" card-header">
            <h1>Invitados:</h1>
              </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Edad</th>
                  <th scope="col">Asistencia</th>
                </tr>
              </thead>
              <tbody>
                {guests}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Guests;

import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

// subcomponents
import EventForm from './components/EventForm';


import { events } from './events.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      events
    }
    this.handleAddEvent = this.handleAddEvent.bind(this);
  }

  removeEvent(index) {
    this.setState({
      events: this.state.events.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddEvent(event) {
    this.setState({
      events: [...this.state.events, event]
    })
  }

  render(){
    const events = this.state.events.map((event, i) => 
    {
      return ( 
            <div className="col-md-4 col-sm-6 col-xs-12">
              <article className="material-card Red">
              <a href="">
                <h2>
                  <span>{event.title}</span>
                  <strong>
                    <i className="fa fa-fw fa-magic"></i>
                    {event.responsible}
                  </strong>
                </h2>
              </a>
                <div className="mc-content card">
                  <a
                className="mc-btn-action
                danger btn-danger"
                onClick={this.removeEvent.bind(this, i)}>
                <i class="fa fa-eye"></i>
              </a>
                  <div className="mc-description">
                    <h4>
                      {event.description}
                    </h4>
                  </div>
                </div>
              </article>
            </div>
      )
    })

  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <a href="" className="navbar-brand">
          <img src={logo} className="App-logo align-top" alt="logo"/>
           Eventos
           <span className=" badge badge-pill badge-success ml-2">
            { this.state.events.length }
           </span>
        </a> 
      </nav>
      <div className="container">
          <div className="row mt-4">
            <div className="col-md-3 text-center">
                <img src={logo} className="App-logo" alt="logo" />
              <EventForm onAddEvent={this.handleAddEvent}></EventForm>
            </div>

            <div className="col-md-9">
              <div className="row">
                {events}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
}

export default App;
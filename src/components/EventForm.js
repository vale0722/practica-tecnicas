import React, {Component} from 'react';

class eventForm extends Component {
 constructor (props) {
    super(props);
    this.state = {
      title: '',
      responsible: '',
      description: '',
      date: '',
      hour: '',
      place: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddEvent(this.state);
    this.setState({
      title: '',
      responsible: '',
      description: '',
      date: '',
      hour: '',
      place: '',
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Titulo"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              className="form-control"
              value={this.state.responsible}
              onChange={this.handleInputChange}
              placeholder="Responsable"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Descripción"
              />
          </div>
          <div className="form-group">
            <input
              type="date"
              name="date"
              className="form-control"
              value={this.state.date}
              onChange={this.handleInputChange}
              placeholder="Fecha"
              />
          </div>
          <div className="form-group">
            <input
              type="hour"
              name="hour"
              className="form-control"
              value={this.state.hour}
              onChange={this.handleInputChange}
              placeholder="Hora"
              />
          </div>
          <div className="form-group">
            <input
              type="place"
              name="place"
              className="form-control"
              value={this.state.place}
              onChange={this.handleInputChange}
              placeholder="Lugar"
              />
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    )
  }

}

export default eventForm;
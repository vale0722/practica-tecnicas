import React, {Component} from 'react';

class eventForm extends Component {
 
  render() {
    return (
      <div className="card">
        <h3>Crear Evento:</h3>
        <form onSubmit={this.props.onSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.props.formValues.title}
              onChange={this.props.onChange}
              placeholder="Titulo"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              className="form-control"
              value={this.props.formValues.responsible}
              onChange={this.props.onChange}
              placeholder="Responsable"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.props.formValues.description}
              onChange={this.props.onChange}
              placeholder="Descripción"
              />
          </div>
          <div className="form-group">
            <input
              type="date"
              name="date"
              className="form-control"
              value={this.props.formValues.date}
              onChange={this.props.onChange}
              placeholder="Fecha"
              />
          </div>
          <div className="form-group">
            <input
              type="hour"
              name="hour"
              className="form-control"
              value={this.props.formValues.hour}
              onChange={this.props.onChange}
              placeholder="Hora"
              />
          </div>
          <div className="form-group">
            <input
              type="place"
              name="place"
              className="form-control"
              value={this.props.formValues.place}
              onChange={this.props.onChange}
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
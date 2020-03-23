import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class eventForm extends Component {

  render() {
    return (
      <div className="card">
        <div className="card-header">
        <h3 className="modal-title">Crear Evento:</h3>
        </div>
        <ValidatorForm onSubmit={this.props.onSubmit} className="card-body">
        <div className="form-group">
            <TextValidator
              type="text"
              name="title"
              validators={['required']}
              errorMessages={['Este campo es requerido']}
              value={this.props.formValues.title}
              className="ValidatorForm-control"
              onChange={this.props.onChange}
              placeholder="Titulo"
            />
          </div>
          <div className="form-group">
            <TextValidator
              type="text"
              name="responsible"
              validators={['required']}
              errorMessages={['Este campo es requerido']}
              value={this.props.formValues.responsible}
              className="ValidatorForm-control"
              onChange={this.props.onChange}
              placeholder="Responsable"
            />
          </div>
          <div className="form-group">
            <TextValidator
              type="text"
              name="description"
              validators={['required']}
              errorMessages={['Este campo es requerido']}
              value={this.props.formValues.description}
              className="ValidatorForm-control"
              onChange={this.props.onChange}
              placeholder="Descripción"
            />
          </div>
          <div className="form-group">
            <TextValidator
              type="date"
              name="date"
              validators={['required']}
              errorMessages={['Este campo es requerido']}
              value={this.props.formValues.date}
              className="ValidatorForm-control"
              onChange={this.props.onChange}
              placeholder="Fecha"
            />
          </div>
          <div className="form-group">
            <TextValidator
              type="hour"
              name="hour"
              validators={['required']}
              errorMessages={['Este campo es requerido']}
              value={this.props.formValues.hour}
              className="ValidatorForm-control"
              onChange={this.props.onChange}
              placeholder="00:00 pm/am"
            />
          </div>
          <div className="form-group">
            <TextValidator
              type="place"
              name="place"
              validators={['required']}
              errorMessages={['Este campo es requerido']}
              className="ValidatorForm-control"
              onChange={this.props.onChange}
              value={this.props.formValues.place}
              placeholder="Lugar"
            />
          </div>
          <Button type="submit" className="btn btn-primary">
            Guardar
          </Button>
        </ValidatorForm>
      </div>
    )
  }

}

export default eventForm;
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

class guestForm extends Component {

    componentDidMount(){
        ValidatorForm.addValidationRule('age', (value) => {
            if (value < 18 ) {
                return false;
            }
            return true;
        });
    }
  render() {
    return (
      <div className="card text-center mb-3 border-danger">
        <div className="card-header">
        <h3 className="modal-title">Agregar Invitado:</h3>
        </div>
        <ValidatorForm onSubmit={this.props.onSubmit} className="card-body">
        <div className="form-group">
            <TextValidator
              type="text"
              name="name"
              validators={['required']}
              errorMessages={['Este campo es requerido']}
              value={this.props.formValues.name}
              className="ValidatorForm-control"
              onChange={this.props.onChange}
              placeholder="Nombre"
            />
          </div>
          <div className="form-group">
            <TextValidator
              type="text"
              name="lastname"
              validators={['required']}
              errorMessages={['Este campo es requerido']}
              value={this.props.formValues.lastname}
              className="ValidatorForm-control"
              onChange={this.props.onChange}
              placeholder="Apellido"
            />
          </div>
          <div className="form-group">
            <TextValidator
              type="number"
              name="age"
              validators={['required', 'age']}
              errorMessages={['Este campo es requerido', 'La edad minima es de 18 años']}
              value={this.props.formValues.age}
              className="ValidatorForm-control"
              onChange={this.props.onChange}
              placeholder="Edad"
            />
          </div>
          <div className="form-group">
          <Select 
            className="ValidatorForm-control" 
            id="asist" 
            name="asist"  
            value={this.props.formValues.asist}
            onChange={this.props.onChange}>
              <MenuItem value={1} className="text-white">Si asistió</MenuItem>
              <MenuItem value={0} className="text-white">No asistió</MenuItem>
          </Select>
          </div>
        
          <Button type="submit" className="btn btn-primary">
            Guardar
          </Button>
        </ValidatorForm>
      </div>
    )
  }

}

export default guestForm;
import React, { Component } from "react";
import { CheckCircle, Cancel } from '@material-ui/icons';

class Guest extends Component {
  render() {

    const {guest} = this.props;

    return (
      <tr>
        <td>{guest.name}</td>
        <td>{guest.lastname}</td>
        <td>{guest.age}</td>
        <td>{guest.asist == 1 ? <CheckCircle color="primary"/>  : <Cancel color="secondary"/> }</td>
      </tr>
    );
  }
}

export default Guest;
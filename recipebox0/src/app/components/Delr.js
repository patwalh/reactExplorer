import React from 'react';
import {render} from 'react-dom'
import {deleteRecipe} from './Recipe'

export class Delr extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (< button type = "button" className = "btn btn-danger" onClick = {
      this.props.del.bind(this, this.props.id)
    } > Delete</button>)
  }
}

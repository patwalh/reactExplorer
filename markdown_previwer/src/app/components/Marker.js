import React from 'react';
import { render } from 'react-dom';
import {Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import { View } from './View';
var marked = require('marked');

export class Marker extends React.Component{
  constructor() {
    super();
    this.state = {
       textValue : ""
    }
  }

  handleChange(event) {
  this.setState({ textValue: event.target.value })
  }
   render(){
    return(
      <div>
        <FormControl  componentClass="textarea"  value = { this.state.textValue }
          onChange = {this.handleChange.bind(this)} style = {{ height : 200 }} />
        <View val = { marked(this.state.textValue) } />
      </div>

    )
  }
}

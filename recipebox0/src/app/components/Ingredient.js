import React, {Component} from 'react';
import render from 'react-dom';
import {Editbutton} from './Editbutton'
import {Delr} from "./Delr"
import {Listitem} from "./Listitem"

export class Ingredient extends Component {

  render() {
    return (<div id={this.props.id} className="panel-collapse collapse" role="tabpanel" aria-labelledby={this.props.id}>
      <div >
        <Listitem rec={this.props.rec.ingredients} id={this.props.id}/>
        <div className="btn-group" role="group">
          <Delr id={this.props.id} del={this.props.del}/>
          <Editbutton rec={this.props.rec} sd={this.props.sd} id={this.props.id}/>
        </div>
      </div>
    </div>);
  }
}

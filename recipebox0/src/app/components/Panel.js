import React, {Component} from 'react';
import {render} from 'react-dom';
import {Ingredient} from './Ingredient'
import {Addbutton} from './Addbutton'

export class Panel extends Component {

  render() {
    return (<div className="panel panel-default">
      <div className="panel-heading" role="tab" id="two">
        <h4 className="panel-title">
          <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href={"#" + this.props.id} aria-expanded="false" aria-controls={this.props.id}>
            {this.props.rec.title}
          </a>
        </h4>
      </div>
      {<Ingredient rec={this.props.rec} id={this.props.id} del={this.props.del} sd={this.props.sd}/>}
    </div>);
  }

}

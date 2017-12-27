import React, {Component} from 'react';
import render from 'react-dom';
export class Listitem extends React.Component {

  render() {
    const items = this.props.rec.map((item, index) => (<button type="button" className="list-group-item" key={this.props.id + " " + index}>{item}</button>));
    return (<div className="list-group">
      {items}
    </div>)
  }
}

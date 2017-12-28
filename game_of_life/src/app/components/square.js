import React, {Component} from 'react';

class Square extends Component {

  render() {
    return (<button className="square" onClick={props.onClick}>
      {props.value}
    </button>);
  }

}

export default Square;

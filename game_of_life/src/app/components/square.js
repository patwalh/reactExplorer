import React, {
  Component
} from 'react';
import {
  render
} from 'react-dom';

class Square extends Component {

  render() {
    return (<button className={"square "+ this.props.value} onClick={this.props.onClick}>
    </button>);
  }

}

export default Square;
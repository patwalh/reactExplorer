

import React, { Component } from 'react';

class Player extends Component {

  render() {
    return (
      <div className = {""+this.props.value}></div>
    );
  }

}

export default Player;

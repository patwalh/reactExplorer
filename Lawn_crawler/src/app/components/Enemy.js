import React, { Component } from 'react';

class Enemy extends Component {

  render() {
    return (
      <div className={""+this.props.value}></div>
    );
  }

}

export default Enemy;

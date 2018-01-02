import React, { Component } from 'react';

class Brick extends Component {

  render() {
    return (
      <div className={""+this.props.value}></div>
    );
  }

}

export default Brick;

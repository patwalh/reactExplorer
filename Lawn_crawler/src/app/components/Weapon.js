import React, { Component } from 'react';


class Weapon extends Component {

  render() {
    return (
      <div className = {""+this.props.value}></div>
    );
  }

}

export default Weapon;

import React, {
  Component
} from 'react';
import {
  render
} from 'react-dom';
import Board from './board';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pause: false,
    };
  }
  handleClick() {
    this.setState({
      pause: !(this.state.pause)
    })

  }
  render() {
    return (<div className="game">
      <button onClick={this.handleClick.bind(this)}>{
        this.state.pause ? "Resume" : "Pause"
      }</button>
      <Board pause={this.state.pause}/></div>);
  }

}

export default Game;
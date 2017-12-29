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

  render() {
    return (<div className="game">
      <Board pause={this.state.pause}/></div>);
  }

}

export default Game;
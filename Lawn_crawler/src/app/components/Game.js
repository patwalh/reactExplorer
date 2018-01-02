import React, {Component} from 'react';
import {lawnPE} from '../Player/enemy';
import {Arena} from './Arena';

var Xmatrix = lawnPE();
var matrix = Xmatrix.matrix;
var player = Xmatrix.pos;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 1,
      cells: matrix,
      player: player,
      health: 200,
      xp : 0,
    }
  }
  componentDidMount() {
    window.addEventListener("keydown", this.move.bind(this));
  }

  wall(x, y) {
    if (this.state.cells[x][y] == 0) {
      return true;
    }
    return false;
  }
  life(x, y) {
    if (this.state.cells[x][y] == 'L') {
      return true;
    }
    return false;
  }

  enemy(x, y) {
    if (this.state.cells[x][y] == 'E') {
      return true;
    }
    return false;
  }

  weapon(x, y) {
    if (this.state.cells[x][y] == 'W') {
      return true;
    }
    return false;
  }

  handleMove = (x, y) => {
    switch (this.state.cells[x][y]) {
      case 'W':
        break;
      case 'E':
        break;
      case 'L':
        break;
      case 0:

        break;
      case 1:
        break;
    }
  }

  move(event) {
    let x = this.state.player.x;
    let y = this.state.player.y;
    if (event.keyCode == 38) {
      if(!this.wall(x,y-1)){
        this.state.cells[x][y - 1] = 'P';
        this.state.cells[x][y] = 1;
        let playerPos = {
          x: x,
          y: y - 1
        }
        this.setState((state) => ({cells: state.cells, player: playerPos}));
      }

      //console.log('d')


    }
    if (event.keyCode == 40) {
      if(!this.wall(x,y+1)){
        this.state.cells[x][y + 1] = 'P';
        this.state.cells[x][y] = 1;
        let playerPos = {
          x: x,
          y: y + 1
        }
        this.setState((state) => ({cells: state.cells, player: playerPos}));
      }

    }
    if (event.keyCode == 37) {
      if(!this.wall(x-1,y)){
        this.state.cells[x-1][y] = 'P';
        this.state.cells[x][y] = 1;
        let playerPos = {
          x: x-1,
          y: y
        }
        this.setState((state) => ({cells: state.cells, player: playerPos}));
      }

    }
    if (event.keyCode == 39) {
      if(!this.wall(x+1,y)){
        this.state.cells[x+1][y] = 'P';
        this.state.cells[x][y] = 1;
        let playerPos = {
          x: x+1,
          y: y
        }
        this.setState((state) => ({cells: state.cells, player: playerPos}));
      }

    }

  }
  render() {

    return (<div><Arena player={this.state.player} matrix={this.state.cells}/>
     <center className="info">
       <span>Level :</span><span>{this.state.level+" "}</span>
       <span>Health :</span><span>{this.state.health+" "}</span>
       <span>XP :</span><span>{this.state.xp+" "}</span>
     </center>
    </div>);
  }

}

export default Game;

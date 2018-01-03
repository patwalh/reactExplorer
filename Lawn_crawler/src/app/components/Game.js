import React, {Component} from 'react';
import {gameLoad} from '../Player/character';
import {Arena} from './Arena';

var globalXmatrix,
  globalMatrix,
  globalPlayer;

function loadGameFromConstructor(level) {
  globalXmatrix = gameLoad(level);
  globalMatrix = globalXmatrix.grid;
  globalPlayer = globalXmatrix.player.pos;
  console.log(globalXmatrix);
};

//load game with level 0
loadGameFromConstructor(0);

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: true,
      level: 1,
      cells: globalMatrix,
      player: globalPlayer,
      health: 100,
      xp: 0,
      weapon: "fist"
    }
  }

  wall(x, y) {
    if (x == -1 || x > 24)
      return false;
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

  limit(x, y) {
    return x >= 0 && y >= 0 && x < 25 && y < 25;
  }

  componentDidMount() {
    document.body.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handleKeyDown(event) {
    if (this.state.game) {
      let x = this.state.player.x;
      let y = this.state.player.y;
      //console.log(x, y);
      if (event.keyCode == 38) {
        if (!this.wall(x, y - 1) && this.limit(x, y - 1)) {
          if (this.life(x, y - 1)) {
            this.setState((state) => ({
              health: state.health + globalXmatrix.lifeVal
            }));
          }
          if (this.enemy(x, y - 1)) {
            this.setState((state) => ({
              health: state.health - globalXmatrix.enemy.health
            }));
            this.setState((state) => ({
              xp: state.xp + 5
            }));
          }

          if (this.weapon(x, y - 1)) {
            this.setState((state) => ({weapon: globalXmatrix.player.weapon.name}));
          }

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
        if (!this.wall(x, y + 1) && this.limit(x, y + 1)) {
          if (this.life(x, y + 1)) {
            this.setState((state) => ({
              health: state.health + globalXmatrix.lifeVal
            }));
          }
          if (this.enemy(x, y + 1)) {
            this.setState((state) => ({
              health: state.health - globalXmatrix.enemy.health
            }));
            this.setState((state) => ({
              xp: state.xp + 5
            }));
          }
          if (this.weapon(x, y + 1)) {
            this.setState((state) => ({weapon: globalXmatrix.player.weapon.name}));
          }
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
        if (!this.wall(x - 1, y) && this.limit(x - 1, y)) {
          if (this.life(x - 1, y)) {
            this.setState((state) => ({
              health: state.health + globalXmatrix.lifeVal
            }));
          }
          if (this.enemy(x - 1, y)) {
            this.setState((state) => ({
              health: state.health - globalXmatrix.enemy.health
            }));
            this.setState((state) => ({
              xp: state.xp + 5
            }));
          }
          if (this.weapon(x - 1, y)) {
            this.setState((state) => ({weapon: globalXmatrix.player.weapon.name}));
          }
          this.state.cells[x - 1][y] = 'P';
          this.state.cells[x][y] = 1;
          let playerPos = {
            x: x - 1,
            y: y
          }
          this.setState((state) => ({cells: state.cells, player: playerPos}));
        }

      }
      if (event.keyCode == 39) {
        if (!this.wall(x + 1, y) && this.limit(x + 1, y)) {
          if (this.life(x + 1, y)) {
            this.setState((state) => ({
              health: state.health + globalXmatrix.lifeVal
            }));
          }
          if (this.enemy(x + 1, y)) {
            this.setState((state) => ({
              health: (
                state.health - globalXmatrix.enemy.health >= 0
                ? state.health - globalXmatrix.enemy.health
                : 0)
            }));
            this.setState((state) => ({
              xp: state.xp + 5
            }));
          }
          if (this.weapon(x + 1, y)) {
            this.setState((state) => ({weapon: globalXmatrix.player.weapon.name}));
          }

          this.state.cells[x + 1][y] = 'P';
          this.state.cells[x][y] = 1;
          let playerPos = {
            x: x + 1,
            y: y
          }
          this.setState((state) => ({cells: state.cells, player: playerPos}));
        }

      }
      if (this.state.health <= 0) {
        loadGameFromConstructor(0);
        this.setState({game: false, xp: 0, level: 0})
      }
      switch (this.state.xp) {
        case 40:
          this.reloadGame(1, 50)
          break;
        case 80:
          this.reloadGame(2, 90)
          break;
        case 120:
          this.reloadGame(3, 130)
          break;
        case 160:
          this.reloadGame(4, 170)
          break;
      }
    }
  }

  reloadGame(x = 0, y = 0) {
    loadGameFromConstructor(x);
    this.setState({
      game: true,
      level: x + 1,
      cells: globalMatrix,
      player: globalPlayer,
      health: 100,
      xp: y,
      weapon: "fist"
    })
  }
  render() {
    return (<div id="game">
      <center><h2>Reach 100 XP !</h2></center>
      <p></p>
    <br/>
      <Arena matrix={this.state.cells} game={this.state.game} reloadGame={this.reloadGame}/>

      <span className="info">{"Level :" + this.state.level + " "}</span>
      <span className="info">{"Health :" + this.state.health + " "}</span>
      <span className="info">{"XP :" + this.state.xp + " "}
      </span>
      <span className="info">{"Weapon :" + this.state.weapon + " "}</span>

      <p><p></p>
        {
          this.state.game
            ? ""
            : "You Lost!"
        }</p><p></p>
      {
        this.state.game
          ? ""
          : <center>
              <button onClick={this.reloadGame.bind(this, 0, 0)}>Try Again</button>
            </center>
      }
    </div>)
  }
}

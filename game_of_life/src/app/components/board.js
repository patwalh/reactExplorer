import React, {
  Component
} from 'react';
import {
  render
} from 'react-dom';
import Square from './square'
//import Boardstruct from './boardstruct'
const size = 4000;
var squares = new Array(size);




function renderBoardValues() {
  for (let i = 0; i < size; i++) {
    let k = Math.random();
    if (k > 0.5) {
      squares[i] = 'X';
    }
  }
}
renderBoardValues();


class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: squares,
      xIsNext: true,
      interval: 200,
      reset: false,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      200
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pause == true) {
      clearInterval(this.timerID);
    } else {
      this.timerID = setInterval(
        () => this.tick(),
        200
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.update();
  }

  validate(pos) {
    if (pos >= 0 && pos < size) return true;
  }

  count(pos) {
    let count = 0;
    if (this.validate(pos - 1) && (squares[pos - 1] == 'X' || squares[pos - 1] == 'O')) count++;
    if (this.validate(pos + 1) && (squares[pos + 1] == 'X' || squares[pos + 1] == 'O')) count++;
    if (this.validate(pos - 50) && (squares[pos - 50] == 'X' || squares[pos - 50] == 'O')) count++;
    if (this.validate(pos + 50) && (squares[pos + 50] == 'X' || squares[pos + 50] == 'O')) count++;
    if (this.validate(pos - 50 + 1) && (squares[pos - 50 + 1] == 'X' || squares[pos - 50 + 1] == 'O')) count++;
    if (this.validate(pos - 50 - 1) && (squares[pos - 50 - 1] == 'X' || squares[pos - 50 - 1] == 'O')) count++;
    if (this.validate(pos + 50 + 1) && (squares[pos + 50 + 1] == 'X' || squares[pos + 50 + 1] == 'O')) count++;
    if (this.validate(pos + 50 - 1) && (squares[pos + 50 - 1] == 'X' || squares[pos + 50 - 1] == 'O')) count++;
    return count;
  }

  born(pos) {
    if ((squares[pos] !== 'X' ||
        squares[pos] !== 'O') && this.count(pos) == 3) return true;
    return false;
  }

  die(pos) {
    if (this.count(pos) > 3 || this.count(pos) <= 1) return true;
    //console.log(pos, this.count(pos))
    return false;
  }

  update() {
    var data = new Array(size);
    for (let i = 0; i < size; i++) {
      data[i] = this.count(i);
    }
    //console.log(data);
    for (let i = 0; i < size; i++) {
      if (squares[i] == 'O') squares[i] = 'X';
    }

    for (let i = 0; i < size; i++) {
      if (data[i] > 3 || data[i] <= 1) squares[i] = null;
      if (data[i] == 3) squares[i] = 'O';
    }

    this.setState({
      squares: squares
    })
  }

  handleClick(i) {
    //console.log(this.props.pause);
    squares[i] = 'X';
    this.setState({
      squares: squares,
    });
  }

  handleReset() {
    squares = new Array(size);
    clearInterval(this.timerID);
    this.setState({
      squares: squares,
      reset: !this.state.reset
    })
  }

  handleRestart() {
    this.timerID = setInterval(
      () => this.tick(),
      200
    );
    renderBoardValues();
  }
  renderSquare() {
    var globalMatrix = new Array(Math.floor(size / 100));
    for (let j = 0; j < size / 100; j++) {
      let matrix = new Array(Math.floor(size / 80));
      for (let i = 0; i < size / 80; i++) {
        matrix.push(
          <Square key={50*j+i} value={this.state.squares[50*j+i]} onClick={() => this.handleClick(50*j+i)}/>
        )
      }
      globalMatrix.push(<div className="board-row"> {matrix} </div>);
    }
    return globalMatrix;
  }

  render() {
    return (<div>
          {this.renderSquare()}
          <button onClick={this.handleReset.bind(this)}>Reset</button>
          <button onClick={this.handleRestart.bind(this)}>Restart</button>
        </div>);
  }

}

export default Board;
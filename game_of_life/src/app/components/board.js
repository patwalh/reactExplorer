import React, {Component} from 'react';
import {render} from 'react-dom';
import Square from './square'


class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array : [],
      pause : false,
      run: false,
      speed : 200,
      counter:0
    };
  }

  handleStart() {
   if (this.state.pause === true) {
    this.setState({
      pause: false
    });
   }
   this.startGame();
  }

startGame() {
  var speed = this.state.speed;
  this.setState({
    run: true
  });

  function pauseGame() {
    clearInterval(timer);
  };

  var check = setInterval(function() {
   if (this.state.pause === true) {
    pauseGame();
   }

 }.bind(this), 5);

  var timer = setInterval(() => {
    var grid = this.state.array.slice();
    generate(grid);
  }, speed);

  var generate = function(a) {
    var nextGen = [];
    var neighb;

    for (var x = 1; x < a.length; x++) {

      // Iterate through current array and generate a neighb count based on the status of neighbor cells:
      if ( x === 1 ) { neighb = a[x + 1][0] + a[x + 49][0] + a[x + 50][0] + a[x + 51][0]; }
      else if ( x >= 2 && x <= 49) { neighb = a[x - 1][0] + a[x + 1][0] + a[x + 49][0] + a[x + 50][0] + a[x + 51][0]; }
      else if ( x === 50 ) { neighb = a[x - 1][0] + a[x + 49][0] + a[x + 50][0]; }
      else if ( x === 51 ) { neighb = a[x + 1][0] + a[x - 50][0] + a[x - 49][0] + a[x + 50][0] + a[x + 51][0]; }
      else if ( x > 51 && x <= 1449) { neighb = a[x - 1][0] + a[x + 1][0] + a[x - 49][0] + a[x - 50][0] + a[x - 51][0] + a[x + 49][0] + a[x + 50][0] + a[x + 51][0]; }
      else if ( x === 1450) { neighb = a[x - 1][0] + a[x + 49][0] + a[x + 50][0]; }
      else if ( x === 1451 ) { neighb = a[x + 1][0] + a[x - 50][0] + a[x - 51][0]; }
      else if ( x >= 1452 && x <= 1499) { neighb = a[x - 1][0] + a[x + 1][0] + a[x - 49][0] + a[x - 50][0] + a[x - 51][0]; }
      else if ( x === 1500 ) { neighb = a[x - 1][0] + a[x - 49][0] + a[x - 50][0]; }

      if ( a[x][0] === 0 ) {
        if ( neighb === 3 ) { nextGen[x] = [1, 'living']; }
        else { nextGen[x] = [0, 'dead']; }
      }
      else if ( a[x][0] === 1 ) {
        if ( neighb === 0 || neighb === 1 ) { nextGen[x] = [0, 'killed']; }
        else if ( neighb >= 4 ) { nextGen[x] = [0, 'killed']; }
        else if ( neighb === 2 || neighb === 3 ) { nextGen[x] = [1, 'survivor']; }
      }

    }

    renderNextGeneration(nextGen);

    }

  var renderNextGeneration = function(array) {
    var count = this.state.counter;
    this.setState({
      array: array,
      counter: count + 1
    });
  }.bind(this);

}

handleCoordinates(index) {
  var currentArray = this.state.array.slice();
  if (currentArray[index][0] === 1) {
    currentArray[index] = [0, 'dead'];
  }
  else {
    currentArray[index] = [1, 'living'];
  }
  this.setState({
    array: currentArray
  })
}

renderRandomState() {
  var array = [];
  for (var i = 1; i < 30 * 50 + 1; i++) {
    var rand = Math.round(Math.random(1) * 3);
    var condition = 'living';
    if (rand !== 1) { rand = 0; condition = 'dead' };
    array[i] = [rand, condition];
  }


  this.setState({
    pause : true,
    counter: 0,
    array: array
  });
}

componentWillMount() {
  this.renderRandomState();
}

changeSpeed(x){
  if(x === 'slow') this.setState({ speed : 1000 })
  else if(x === 'medium') this.setState({ speed : 500 })
  else  this.setState({ speed : 200 })
}

handlePauseBtn(){
  this.setState({
    pause : true
  })
}

handleClearBtn() {
  let a=[];
  for(let i=1;i<1501;i++){
    a[i] = [0,'dead']
  }
  this.setState({
    array : a
  })
}

handleSquareClick(v){
  if(this.state.pause) {
    let currentArray = this.state.array.slice();
    if(currentArray[v][0] !== 1 ) currentArray[v] = [1,'living']
    else currentArray[v] = [0, 'dead']

    this.setState({
      array : currentArray
    })
  }
}

  render() {
    var globalMatrix = [];
    if(this.state.array.length > 0){
    for (let j = 0; j < 30; j++) {
      let matrix = [];
      for (let i = 1 ; i <= 50 ; i++) {
        matrix.push(
          <Square key={50*j+i} value={this.state.array[50*j+i][1]} onClick = {this.handleSquareClick.bind(this,50*j+i)}/>
        )
      }
      globalMatrix.push(<div className="board-row"> {matrix} </div>);
    }
  }

    return (
      <div>
        {globalMatrix }
        <button onClick={this.renderRandomState.bind(this)}>New Lawn</button>
        <button onClick={this.handleStart.bind(this)}>Start</button>
        <button onClick= {this.handlePauseBtn.bind(this)}> Pause </button>
        <button onClick= {this.handleClearBtn.bind(this)}> Clear </button>
        <button onClick={this.changeSpeed.bind(this,'slow')}>slow</button>
        <button onClick={this.changeSpeed.bind(this,'medium')}>medium</button>
        <button onClick={this.changeSpeed.bind(this,'fast')}>fast</button>
        <button>Generation : {this.state.counter } </button>
      </div>);
  }

}

export default Board;

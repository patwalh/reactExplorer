import {lawnWithPlayer} from './player';

var enemies = function(maze) {
  this.number = 10;
  this.maze = maze;
  this.health = 40;
}

enemies.prototype.getPos = function() {
  var findPos = () => {
    var r = this.getRandInt(0, this.maze[0].length);
    var c = this.getRandInt(0, this.maze.length);
    if (this.maze[r][c] == 0 || this.maze[r][c] == 'P') {
      findPos();
    } else {
      this.maze[r][c] = 'E';
    }
  }
  for (let i = 0; i < this.number; i++) {
    findPos();
  }
}

enemies.prototype.getRandInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function lawnPE() {
  var en = lawnWithPlayer();
  var lawnPE = new enemies(en.maze);
  lawnPE.getPos();
  var matrix = lawnPE.maze;
  // place weapon on map
  var row =enemies.prototype.getRandInt(0, 25) ,
    column =enemies.prototype.getRandInt(0, 25);
  while (matrix[row][column] !== 1) {
    row = enemies.prototype.getRandInt(0, 25);
    column = enemies.prototype.getRandInt(0, 25);
  }
  matrix[row][column] = "W"

  //Place health
  for (let i = 1; i <= enemies.prototype.getRandInt(3, 6); i++) {
    while (matrix[row][column] !== 1) {
      row = enemies.prototype.getRandInt(0, 25);
      column = enemies.prototype.getRandInt(0, 25);
    }
    matrix[row][column] = "L"
  }
  return { matrix : matrix, pos : en.pos };

}

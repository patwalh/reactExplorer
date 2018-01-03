import {RandomLawn} from '../Algorithm/RandomLawn';

var weapons = [
  {
    name: "Hand",
    attack: 10
  }, {
    name: "dagger",
    attack: 20
  }, {
    name: "axe",
    attack: 30
  }, {
    name: "sword",
    attack: 40
  }, {
    name: "Magic Wand",
    attack: 50
  }
];

var player = function(level,grid) {
  this.health = 100;
  this.weapon = weapons[level];
  this.XP = 0;
  this.pos = null;
  this.grid = grid;
}

player.prototype.getPos = function() {

  var row = player.prototype.getRandInt(0, 25),
    column = player.prototype.getRandInt(0, 25);

  while (this.grid[row][column] !== 1) {
    row = enemies.prototype.getRandInt(0, 25);
    column = enemies.prototype.getRandInt(0, 25);
  }
    this.grid[row][column] = 'P';
    this.pos = {x:row,y:column}
  }



player.prototype.getRandInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/* ENEMY */
var enemies = function(level) {
  this.number = 10;
  this.health = 20 + level*this.getRandInt(10,20);
}

enemies.prototype.getPos = function(grid) {
  var findPos = () => {
    var r = this.getRandInt(0, grid[0].length);
    var c = this.getRandInt(0, grid.length);
    if (grid[r][c] == 0 || grid[r][c] == 'P') {
      findPos();
    } else {
      grid[r][c] = 'E';
    }
  }
  for (let i = 0; i < this.number; i++) {
    findPos();
  }
}

enemies.prototype.getRandInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function genGame(level) {
  this.grid = RandomLawn(25, 25);
  this.level = level;
  this.player = new player(this.level,this.grid);
  this.enemy = new enemies(this.level);
  this.lifeVal = 20+20*level;
}

genGame.prototype.load = function() {
  console.log(this.grid);
  this.player.getPos(this.grid);
  var lawnPE = new enemies(this.level);
  lawnPE.getPos(this.grid);
  //console.log(this.grid);
  // place weapon on map
  let row = enemies.prototype.getRandInt(0, 25),
    column = enemies.prototype.getRandInt(0, 25);
  while (this.grid[row][column] !== 1) {
    row = enemies.prototype.getRandInt(0, 25);
    column = enemies.prototype.getRandInt(0, 25);
  }
  this.grid[row][column] = "W"

  //Place health
  for (let i = 1; i <= enemies.prototype.getRandInt(3, 6); i++) {
    while (this.grid[row][column] !== 1) {
      row = enemies.prototype.getRandInt(0, 25);
      column = enemies.prototype.getRandInt(0, 25);
    }
    this.grid[row][column] = "L";
    //console.log(this);
  }
}

export function gameLoad(level){
  var gameFrame = new genGame(level);
  gameFrame.load();
  //console.log(gameFrame);
  return gameFrame;
}

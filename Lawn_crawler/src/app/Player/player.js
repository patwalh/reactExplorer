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

var player = function(maze) {
  this.maze = maze;
  this.health = 100;
  this.weapon = weapons[0];
  this.level = 1;
  this.XP = 0;
  this.pos = this.getPos();
}

player.prototype.getPos = function() {
  var r = this.getRandInt(0, this.maze[0].length);
  var c = this.getRandInt(0, this.maze.length);
  if (this.maze[r][c] == 0) {
    this.getPos();
  } else {
    this.maze[r][c] = 'P';
  }
  return {x :r,y:c};
}

player.prototype.getRandInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function lawnWithPlayer() {
  var lawn = RandomLawn(25, 25);
  var loadPlayer = new player(lawn);
  return {maze : loadPlayer.maze, pos : loadPlayer.pos } ;
}

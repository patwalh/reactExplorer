//constructor function to generateMaze

function generateMaze(height,width){
  this.width = width;
  this.height = height;
  this.maze = [];
}
generateMaze.prototype.ar =  [1,2,3,4];

generateMaze.prototype.generateRandomDirections = function(){
  // for (let i = 0; i < 4; i++) {
  //   ar.push(Math.floor(Math.random() * 5))
  // }
  return this.ar;
}

generateMaze.prototype.generateArray = function(){
  for (let i = 0; i < this.height; i++) {
    let ar = [];
    for (let j = 0; j < this.width; j++) {
      ar.push(1);
    }
    this.maze.push(ar);
  }
  var r = Math.floor(Math.random() * this.height);
  var c = Math.floor(Math.random() * this.width);
  this.maze[r][c] = 0;
  this.recursion(r, c);
}

generateMaze.prototype.recursion = function(r,c){
  let randDirs = this.generateRandomDirections();
  for (let i = 0; i < randDirs.length; i++) {
    switch (randDirs[i]) {
      case 1: // Up
        //　Whether 2 cells up is out or not
        if (r - 2 <= 0)
          continue;
        if (this.maze[r - 2][c] != 0) {
          this.maze[r - 2][c] = 0;
          this.maze[r - 1][c] = 0;//console.log('1');
          this.recursion(r - 2, c);
        }
        break;
      case 2: // Right
        // Whether 2 cells to the right is out or not
        if (c + 2 >= this.width-1)
          continue;
        if (this.maze[r][c + 2] != 0) {
          this.maze[r][c + 2] = 0;
          this.maze[r][c + 1] = 0;//console.log('2');
          this.recursion(r, c + 2);
        }
        break;
      case 3: // Down
        // Whether 2 cells down is out or not
        if (r + 2 >= this.height - 1)
          continue;
        if (this.maze[r + 2][c] != 0) {
          this.maze[r + 2][c] = 0;
          this.maze[r + 1][c] = 0;//console.log('3');
          this.recursion(r + 2, c);
        }
        break;
      case 4: // Left
        // Whether 2 cells to the left is out or not
        if (c - 2 <= 0)
          continue;
        if (this.maze[r][c - 2] != 0) {
          this.maze[r][c - 2] = 0;
          this.maze[r][c - 1] = 0;//console.log('4');
          this.recursion(r, c - 2);
        }
        break;
    }

  }

}

export default function RandomLawn(width,height){
var a = new generateMaze(width,height);
a.generateArray();
return a.maze;
}

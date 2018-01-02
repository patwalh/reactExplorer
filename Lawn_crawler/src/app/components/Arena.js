import React, {Component} from 'react';
import {RandomLawn} from '../Algorithm/RandomLawn';
import Brick from './Brick';
import Space from './Space';
import Enemy from './Enemy';
import Player from './Player';
import Weapon from './Weapon';
import Lives from './Lives';
import {lawnPE} from '../Player/enemy'


//console.log(lawnPE);
export class Arena extends Component {
  constructor(props){
    super(props);
    this.state = {
      matrix : this.props.matrix
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      matrix: this.state.matrix
    })
  }
  renderSquare() {
   var lawn = this.state.matrix;
   var globalMatrix = [];
   for (let j = 0; j < lawn.length; j++) {
     let matrix = [];
     for (let i = 0; i < lawn[0].length; i++) {
       if(lawn[i][j] == 0)
         {matrix.push(<Brick key={lawn.length*j + i} value={"brick"} />)}
      else if(lawn[i][j] == 'P'){
         matrix.push(<Player key={lawn.length*j + i} value={"player"} />)
      }
      else if(lawn[i][j] == 'E'){
        matrix.push(<Enemy key={lawn.length*j + i} value={"enemy"} />)
      }
      else if(lawn[i][j] == 'W'){
         matrix.push(<Weapon key={lawn.length*j + i} value={"weapon"} />)
       }

      else if(lawn[i][j] == 'L'){
         matrix.push(<Lives key={lawn.length*j + i} value={"life"} />)
      }

       else matrix.push(<Space key={lawn.length*j + i} value={"space"} />)
     }
     globalMatrix.push(<div className="lawnrow">
       {matrix}
     </div>);
   }
   return globalMatrix;
 }

  render() {
    return (
      <div className="Arena"><div>{this.renderSquare()}</div></div>
    );
  }

}

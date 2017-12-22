import React from 'react';
import { render } from 'react-dom';



export class Display extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status : true
    }
  }

  handleChange() {
    this.setState(prevState => ({
      status: !prevState.status
    }));
  }
   render(){
    var mapVal = this.state.status ? this.props.alltime : this.props.recenttime;
    return (

    <div>
      <button type="button" className="btn" style = {{marginLeft : '10px', float : 'right',color : '#88' }} onClick = {this.handleChange.bind(this)} >{ this.state.status ? 'Sort By Recent'
      : 'Sort By Alltime' }  </button>
    <hr/>
   <table class="table">
    <thead>
      <tr style ={{color : '#777'}}>
        <th className= "success" width= "50">#</th>
        <th className= "info" width= "150">User</th>
        <th className ="success" width= "150">Name</th>
        <th className ="info" width= "150">All Time</th>
        <th className = "success" width= "150">Recent Time</th>
      </tr>
    </thead>

     {

    mapVal.map((obj , index ) =>

       <tbody>
         <tr style = {{color : '#555'}}>
           <td width = "50">{index+1 + '.'}</td>
           <td width = "150">
             <a href = "https://www.github.com"> <img src={obj.img} width= "50" height = "50"/></a>
           </td>
           <td width = "150">{obj.username}</td>
           <td width = "150"> { obj.alltime }</td>
           <td width = "150"> { obj.recent }</td>
         </tr>
       </tbody>

     )
   }
   </table>
    </div>

    )
  }

}

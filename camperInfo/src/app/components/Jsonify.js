import React from 'react';
import { render } from 'react-dom';
import { Display } from './Display';
import axios from 'axios';


// Make a request for a user with a given ID

export class Jsonify extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        allTimeUserData : null,
        recentTimeUserData : null,
        activeFirst : true
    }
  }
   componentDidMount() {
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then( response =>
        this.setState({
          allTimeUserData : response.data
        })
      ).then( response =>
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then( response =>
        this.setState({
          recentTimeUserData : response.data
        })
     ))
  }

  render(){
    return (
      <div>
      { !this.state.recentTimeUserData &&
        <p>Loading...</p>
      }
        { this.state.recentTimeUserData && this.state.allTimeUserData &&
          <Display
           alltime = {this.state.allTimeUserData}
           recenttime = {this.state.recentTimeUserData}
           status = { this.state.activeFirst }
          />
        }
      </div>

    )
  }
}

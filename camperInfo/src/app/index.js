//get dependencies
import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Jsonify } from "./components/Jsonify";

//create a new component
class App extends React.Component {
    render(){
        return (
          <div>
          <Header/>
          <Jsonify/>
          </div>
        )
    }
}

render(<App/>,window.document.getElementById('app'));

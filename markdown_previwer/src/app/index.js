//get dependencies
import React from "react";
import { render } from "react-dom";
import { Marker } from "./components/Marker";
import { View } from "./components/View";

//create a new component
class App extends React .Component {
    render(){
        return (
          <div>
         <Marker/>
          </div>
        )
    }
}

render(<App/>,window.document.getElementById('app'));

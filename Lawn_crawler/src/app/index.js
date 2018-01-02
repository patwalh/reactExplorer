//get dependencies
import React from "react";
import {render} from "react-dom";
import './scss/style.scss';
import {Header} from "./components/Header";
import Game from "./components/Game";


//create a new component
class App extends React.Component {
  render() {
    return (<div>
      <Header/>
    <Game/>
    </div>);
  }
}

render(<App/>, window.document.getElementById("app"));

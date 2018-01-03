//get dependencies
import React from "react";
import {render} from "react-dom";
import './scss/style.scss';
import Game from "./components/Game";

//create a new component
class App extends React.Component {
  render() {
    return (<Game/>);
  }
}

render(<App/>, window.document.getElementById("app"));

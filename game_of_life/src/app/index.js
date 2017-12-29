//get dependencies
import React from "react";
import {
  render
} from "react-dom";
import {
  Header
} from "./components/Header";
import Game from "./components/game"
import './scss/styles.scss'

class App extends React.Component {
  render() {
    return (<div className="gameLayout">
      <Header/>
      <Game/>
    </div>)
  }
}

render(<App/>, window.document.getElementById('app'));
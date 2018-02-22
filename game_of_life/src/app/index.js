//get dependencies
import React from "react";
import { render } from "react-dom";

import Game from "./components/game"
import './scss/styles.scss'

class App extends React.Component {
  render() {
    return (<div className="gameLayout">
      <Game/>
    </div>)
  }
}

render(<App/>, window.document.getElementById('app'));

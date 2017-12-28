//get dependencies
import React from "react";
import {render} from "react-dom";
import {Header} from "./components/Header";
import './scss/styles.scss'

class App extends React.Component {
  render() {
    return (<div>
      <Header/>
    </div>)
  }
}

render(<App/>, window.document.getElementById('app'));

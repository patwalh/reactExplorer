//get dependencies
import React from "react";
import {render} from "react-dom";
import './scss/style.scss';
import {Header} from "./components/Header";
import {Arena} from "./components/Arena";


//create a new component
class App extends React.Component {
  function() {
    return e
  }
  render() {
    return (<div>
      <Header/>
    <Arena/>
    </div>);
  }
}

render(<App/>, window.document.getElementById("app"));

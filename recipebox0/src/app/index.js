import React from "react";
import {render} from "react-dom";
import {Nav} from "./components/Navbar";
import {Recipe} from "./components/Recipe";

//create a new component
class App extends React.Component {
  render() {
    return (<div>
      <Nav/>
      <Recipe/>
    </div>);
  }
}

render(<App/>, document.getElementById('app'));

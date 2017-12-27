import React from "react";
import {render} from "react-dom";
import {Accordion} from "./Accordion"
import {Addbutton} from "./Addbutton"

export var recipes = (typeof localStorage["recipeBook"] != "undefined")
  ? JSON.parse(localStorage["recipeBook"])
  : [
    {
      title: "Pumpkin Pie",
      ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"]
    }, {
      title: "Spaghetti",
      ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]
    }, {
      title: "Onion Pie",
      ingredients: ["Onion", "Pie Crust", "Sounds Yummy right?"]
    }
  ]

export class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: recipes
    }
  }
  delRecipe() {
    //needs work
    recipes.splice(0, 1);
    this.setState({data: recipes})
  }

  getData(data) {
    recipes.push({
      title: data[0],
      ingredients: data.slice(1,)
    })
    localStorage.setItem("recipeBook", JSON.stringify(recipes));

    this.setState({data: recipes})
  }

  render() {
    return (<div className="class-name">
      <Accordion rec={recipes} del={this.delRecipe.bind(this)} sd={this.getData.bind(this)}/>
    </div>);
  }
}

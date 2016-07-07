/*eslint no-undef: 0*/

import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/recipe-container.scss";

import RecipeTop from "./RecipeTop";
import Grid from "./Grid";
// Make some of these methods static! Then figure out how binding works for those

class RecipeContainer extends React.Component {
  constructor() {
    super();

    let items;

    if (localStorage.getItem("_oksas_recipes")) {
      console.log("found locally stored items, supposedly");
      items = JSON.parse(localStorage.getItem("_oksas_recipes"));
    } else {
      items = this.generateInitialData();
    }

    this.state = {
      editing: false,
      items,
      gridConfig: {
        margin: 0.75,
        width: 2.5,
        units: "rem"
      }
    };

    this.moveToFront = this.moveToFront.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.saveLocalRecipes = this.saveLocalRecipes.bind(this);
    this.generateInitialData = this.generateInitialData.bind(this);

    this.saveLocalRecipes(this.state.items);
  }

  generateInitialData() {
    let items = [];
    for (var i = 0; i < 8; i++) {
      items.push({
        color: `#${i % 2}0${i % 9}7${i % 6}1`,
        title: `Recipe ${i}`,
        ingredients: ["salt", "chile", "paprika"],
        instructions: ["bake", "shake", "consume"]
      });
    }

    return items;
  }

  saveLocalRecipes(items) {
    console.log("Saving local recipes...");
    // What does the below line return? Can use its return value to handle errors?
    localStorage.setItem("_oksas_recipes", JSON.stringify(items));
  }

  moveToFront(oldArr, index) {
    let newArr = [...oldArr];
    let item = newArr.splice(index, 1)[0];
    newArr.unshift(item);
    return newArr;
  }

  handleClick(index) {
    this.setState({
      editing: false,
      items: this.moveToFront(this.state.items, index)
    });
  }

  handleSave(item) {
    let newItems = [].concat(item, this.state.items.slice(1));
    this.setState({
      editing: false,
      items: newItems
    });
    this.saveLocalRecipes(newItems);
  }

  handleSwitch() {
    this.setState({
      editing: !this.state.editing
    });
  }

  handleCancel() {
    this.setState({
      editing: false
    });
  }

  render() {
    return (
			<div styleName="container">
        <Grid
          gridConfig={this.state.gridConfig}
          handleClick={this.handleClick}
          items={this.state.items}
        />
				<RecipeTop
          item={this.state.items[0]}
          editing={this.state.editing}
          handleSave={this.handleSave}
          handleCancel={this.handleCancel}
          switchModes={this.handleSwitch}
        />
			</div>
		);
  }
}

export default CSSModules(RecipeContainer, styles);

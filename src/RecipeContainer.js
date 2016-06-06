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
    const batman = {
      color: "blue",
      title: "Batman's Famous Chicken",
      ingredients: ["salt", "chile", "paprika"],
      instructions: ["bake", "shake", "consume"]
    };
    const batman2 = {
      color: "blue",
      title: "Batman's Sloppy Chicken",
      ingredients: ["salt", "chile", "paprika"],
      instructions: ["bake", "shake", "consume"]
    };

    this.state = {
      editing: false,
      items: localStorage._oksas_recipes || [batman, batman2]
    };
    this.moveToFront = this.moveToFront.bind(this);
    this.getGridConfig = this.getGridConfig.bind(this);
    this.onMount = this.onMount.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  moveToFront(oldArr, index) {
    let newArr = [...oldArr];
    let item = newArr.splice(index, 1)[0];
    newArr.unshift(item);
    return newArr;
  }

  getBoxWidthPercentage(rowLen, margin) {
    return (100 - (2 * rowLen - 2) * margin) / rowLen;
  }

  getGridConfig() {
    let width = window.screen.width;
    let rowLen;
    let margin;

    if (width < 480) {
      rowLen = 2;
      margin = 10;
    } else if (width < 800) {
      rowLen = 3;
      margin = 10;
    } else {
      rowLen = 4;
      margin = 5;
    }

    const config = {
      rowLen,
      margin,
      width: this.getBoxWidthPercentage(rowLen, margin),
      units: "%"
    };

    return config;
  }

  onMount() {
    this.setState({
      gridConfig: this.getGridConfig()
    });
  }

  componentDidMount() {
    this.onMount();
  }

  handleClick(index) {
    this.setState({
      items: this.moveToFront(this.state.items, index)
    });
  }

  render() {
    return (
			<div>
        <span>Sup</span>
				<RecipeTop
          item={this.state.items[0]}
          editing={this.state.editing}
          handleSave={() => {}}
          handleCancel={() => {}}
          switchModes={() => {}}
        />
        <Grid
          gridConfig={{ rowLen: 2, margin: 10, width: 40, units: "%" }}
          handleClick={this.handleClick}
          items={this.state.items}
        />
			</div>
		);
  }
}

export default CSSModules(RecipeContainer, styles);

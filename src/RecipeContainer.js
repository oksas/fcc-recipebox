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
    let items = [];
    for (var i = 0; i < 8; i++) {
      items.push({
        color: "blue",
        title: `Recipe ${i}`,
        ingredients: ["salt", "chile", "paprika"],
        instructions: ["bake", "shake", "consume"]
      });
    }

    this.state = {
      editing: false,
      items: localStorage._oksas_recipes || items
    };
    this.moveToFront = this.moveToFront.bind(this);
    this.getGridConfig = this.getGridConfig.bind(this);
    this.onMount = this.onMount.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  moveToFront(oldArr, index) {
    let newArr = [...oldArr];
    let item = newArr.splice(index, 1)[0];
    newArr.unshift(item);
    return newArr;
  }

  getBoxWidthPercentage(rowLen, marginPercent) {
    return (100 - (2 * rowLen - 2) * marginPercent) / rowLen;
  }

  percentToPixels(percentage, total) {
    return (percentage / 100) * total;
  }

  // Turn this into a pure function!
  getGridConfig(gridWidth) {
    let rowLen;
    let marginPercent;

    if (gridWidth < 480) {
      rowLen = 2;
      marginPercent = 10;
    } else if (gridWidth < 800) {
      rowLen = 3;
      marginPercent = 10;
    } else {
      rowLen = 4;
      marginPercent = 5;
    }

    const marginPixels = this.percentToPixels(marginPercent, gridWidth);
    const widthPercent = this.getBoxWidthPercentage(rowLen, marginPercent);
    const widthPixels = this.percentToPixels(widthPercent, gridWidth);

    const config = {
      rowLen,
      margin: marginPixels,
      width: widthPixels,
      units: "px"
    };

    return config;
  }

  onMount() {
    this.setState({
      gridConfig: this.getGridConfig(this.recipeBox.clientWidth)
    });
  }

  componentDidMount() {
    this.onMount();
  }

  handleClick(index) {
    this.setState({
      editing: false,
      items: this.moveToFront(this.state.items, index)
    });
  }

  handleSave(item) {
    this.setState({
      editing: false,
      items: [].concat(item, this.state.items.slice(1))
    });
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
			<div styleName="container" ref={ref => this.recipeBox = ref}>
				<RecipeTop
          item={this.state.items[0]}
          editing={this.state.editing}
          handleSave={this.handleSave}
          handleCancel={this.handleCancel}
          switchModes={this.handleSwitch}
        />
        {
          this.state.gridConfig
          ? <Grid
            gridConfig={this.state.gridConfig}
            handleClick={this.handleClick}
            items={this.state.items}
          />
          : null
        }
			</div>
		);
  }
}

export default CSSModules(RecipeContainer, styles);

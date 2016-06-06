/*eslint no-undef: 0*/

import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/recipe-container.scss";

class RecipeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      items: localStorage._oksas_recipes
    };
    this.moveToFront = this.moveToFront.bind(this);
    this.generateGridConfig = this.generateGridConfig.bind(this);
  }

  moveToFront(oldArr, index) {
    let newArr = [...oldArr];
    let item = newArr.splice(index, 1)[0];
    newArr.unshift(item);
    return newArr;
  }

  generateGridConfig() {
    // get the window width
    let width = window.screen.width;
  }

  render() {
    return (
			<div>
				container yo
			</div>
		);
  }
}

export default CSSModules(RecipeContainer, styles);

import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/recipe-container.scss";

class RecipeContainer extends React.Component {
  render() {
    return (
			<div>
				container yo
			</div>
		);
  }
}

export default CSSModules(RecipeContainer, styles);

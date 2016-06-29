import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/recipe-display.scss";

class RecipeDisplay extends React.Component {
  render() {
    return (
			<div styleName="display">
				<div styleName="title-wrap">
					<h1 styleName="title">{this.props.item.title}</h1>
				</div>
				<div styleName="ingredients">
          <h2 styleName="sub-header">Ingredients</h2>
					{this.props.item.ingredients.map(item => (
						<p key={item}>{item}</p>
					))}
				</div>
				<div styleName="instructions">
          <h2 styleName="sub-header">Instructions</h2>
					{this.props.item.instructions.map(item => (
						<p key={item}>{item}</p>
					))}
				</div>
			</div>
		);
  }
}

RecipeDisplay.propTypes = {
  item: React.PropTypes.shape({
    color: React.PropTypes.string,
    title: React.PropTypes.string,
    ingredients: React.PropTypes.array,
    instructions: React.PropTypes.array
  }).isRequired
};

export default CSSModules(RecipeDisplay, styles);

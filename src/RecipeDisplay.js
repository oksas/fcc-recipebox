import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/recipe-display.scss";

class RecipeDisplay extends React.Component {
  render() {
    return (
			<div styleName="display">
				<div styleName="title">
					<h1>{this.props.item.title}</h1>
				</div>
				<div styleName="ingredients">
					{this.props.item.ingredients.map(item => (
						<p key={item}>{item}</p>
					))}
				</div>
				<div styleName="instructions">
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

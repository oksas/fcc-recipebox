import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/recipe-display.scss";
// LLAMA FIX THE TWO KEYS HERE SOMEHOW
class RecipeDisplay extends React.Component {
  render() {
    const deleteState = this.props.canDelete ? "action" : "action-disabled";

    return (
			<div styleName="display">
				<div styleName="title-wrap">
					<h1 styleName="title">{this.props.item.title}</h1>
          <div styleName="action-wrap">
            <button styleName="action" onClick={this.props.switchModes}>
              <span styleName="icon">e</span>
              edit
            </button>
            <button styleName="action" onClick={this.props.handleAdd}>
              <span styleName="icon">+</span>
              add
            </button>
            <button styleName={deleteState} onClick={this.props.handleDelete}>
              <span styleName="icon">-</span>
              delete
            </button>
          </div>
				</div>
				<div styleName="ingredients">
          <h2 styleName="sub-header">Ingredients</h2>
					{this.props.item.ingredients.map((item, index) => (
						<p key={index}>{item}</p>
					))}
				</div>
				<div styleName="instructions">
          <h2 styleName="sub-header">Instructions</h2>
					{this.props.item.instructions.map((item, index) => (
						<p key={index}>{item}</p>
					))}
				</div>
			</div>
		);
  }
}

RecipeDisplay.propTypes = {
  item: React.PropTypes.shape({
    id: React.PropTypes.number,
    color: React.PropTypes.string,
    title: React.PropTypes.string,
    ingredients: React.PropTypes.array,
    instructions: React.PropTypes.array
  }).isRequired,
  canDelete: React.PropTypes.bool.isRequired,
  handleAdd: React.PropTypes.func.isRequired,
  handleDelete: React.PropTypes.func.isRequired,
  switchModes: React.PropTypes.func.isRequired
};

export default CSSModules(RecipeDisplay, styles);

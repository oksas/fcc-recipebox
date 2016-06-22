import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/recipe-top.scss";

import RecipeDisplay from "./RecipeDisplay";
import RecipeEditor from "./RecipeEditor";

class RecipeTop extends React.Component {
  render() {
    return (
			<div styleName="top">
				<button onClick={this.props.switchModes}>change</button>
				{this.props.editing
          ?	<div>
					<RecipeDisplay item={this.props.item} />
					<RecipeEditor initialItem={this.props.item}
							onSave={this.props.handleSave}
							onCancel={this.props.handleCancel} />
					</div>
					: <RecipeDisplay item={this.props.item} />
				}
			</div>
		);
  }
}

RecipeTop.propTypes = {
  item: React.PropTypes.shape({
    color: React.PropTypes.string,
    title: React.PropTypes.string,
    ingredients: React.PropTypes.array,
    instructions: React.PropTypes.array
  }).isRequired,
  editing: React.PropTypes.bool.isRequired,
  handleSave: React.PropTypes.func.isRequired,
  handleCancel: React.PropTypes.func.isRequired,
  switchModes: React.PropTypes.func.isRequired
};

export default CSSModules(RecipeTop, styles);

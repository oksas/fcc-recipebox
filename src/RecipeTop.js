import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/recipe-top.scss";

import RecipeDisplay from "./RecipeDisplay";
import RecipeEditor from "./RecipeEditor";

class RecipeTop extends React.Component {
  render() {
    return (
			<div styleName="top">
				{this.props.editing
          ?	<div>
					<RecipeDisplay item={this.props.item}
            switchModes={this.props.switchModes}
            canDelete={this.props.canDelete}
            handleAdd={this.props.handleAdd}
            handleDelete={this.props.handleDelete} />
					<RecipeEditor initialItem={this.props.item}
							onSave={this.props.handleSave}
							onCancel={this.props.handleCancel} />
					</div>
					: <RecipeDisplay item={this.props.item}
            switchModes={this.props.switchModes}
            canDelete={this.props.canDelete}
            handleAdd={this.props.handleAdd}
            handleDelete={this.props.handleDelete} />
				}
			</div>
		);
  }
}

RecipeTop.propTypes = {
	item: React.PropTypes.shape({
		id: React.PropTypes.number,
		color: React.PropTypes.string,
		title: React.PropTypes.string,
		ingredients: React.PropTypes.array,
		instructions: React.PropTypes.array
	}).isRequired,
	canDelete: React.PropTypes.bool.isRequired,
	editing: React.PropTypes.bool.isRequired,
	handleSave: React.PropTypes.func.isRequired,
	handleCancel: React.PropTypes.func.isRequired,
	handleAdd: React.PropTypes.func.isRequired,
	handleDelete: React.PropTypes.func.isRequired,
	switchModes: React.PropTypes.func.isRequired
};

export default CSSModules(RecipeTop, styles);

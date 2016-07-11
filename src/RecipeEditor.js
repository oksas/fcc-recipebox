import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/recipe-editor.scss";

class RecipeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: this.props.initialItem };
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    let value;

    if (field === "ingredients" || field === "instructions") {
      value = event.target.value.split("\n");
    } else {
      value = event.target.value;
    }

    this.setState({
      item: {
        ...this.state.item,
        [field]: value
      }
    });
  }

  handleSave() {
    this.props.onSave(this.state.item);
  }

  handleCancel() {
    this.props.onCancel();
  }

  render() {
    return (
      <div styleName="wrapper">
        <div styleName="editor">
          <div styleName="title">
            <input
              name="title"
              onChange={this.handleChange}
              value={this.state.item.title} />
          </div>
          <div styleName="title">
            <input
              name="color"
              onChange={this.handleChange}
              value={this.state.item.color} />
          </div>
          <div styleName="ingredients">
            <textarea
              name="ingredients"
              onChange={this.handleChange}
              value={this.state.item.ingredients.join("\n")} />
          </div>
          <div styleName="instructions">
            <textarea
              name="instructions"
              onChange={this.handleChange}
              value={this.state.item.instructions.join("\n")} />
          </div>
          <button onClick={this.handleSave}>save</button>
          <button onClick={this.handleCancel}>cancel</button>
        </div>
      </div>
		);
  }
}

RecipeEditor.propTypes = {
  initialItem: React.PropTypes.shape({
    id: React.PropTypes.number,
    color: React.PropTypes.string,
    title: React.PropTypes.string,
    ingredients: React.PropTypes.array,
    instructions: React.PropTypes.array
  }).isRequired,
  onSave: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired
};

export default CSSModules(RecipeEditor, styles);

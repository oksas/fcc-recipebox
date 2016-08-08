/*eslint no-undef: 0*/

import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/recipe-container.scss";

import RecipeTop from "./RecipeTop";
import Grid from "./Grid";

class RecipeContainer extends React.Component {
	constructor() {
		super();

		let items;

		if (localStorage.getItem("_oksas_recipes")) {
			items = JSON.parse(localStorage.getItem("_oksas_recipes"));
		} else {
			items = this.generateInitialData();
		}

		this.state = {
			editing: false,
			items,
			gridConfig: {
				margin: 0.75,
				width: 2.5,
				units: "rem"
			}
		};

		this.moveToFront = this.moveToFront.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleSave = this.handleSave.bind(this);
		this.handleSwitch = this.handleSwitch.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.saveLocalRecipes = this.saveLocalRecipes.bind(this);
		this.generateInitialData = this.generateInitialData.bind(this);
		this.getSampleItem = this.getSampleItem.bind(this);

		this.saveLocalRecipes(this.state.items);
	}

	handleAdd() {
		let sampleItem = this.getSampleItem();
		let newItems = [].concat(sampleItem, this.state.items);
		this.setState({
			items: newItems
		});
		this.saveLocalRecipes(newItems);
	}

	getSampleItem() {
		return {
			id: Date.now(),
			color: "#turquoise",
			title: "Rad New Recipe",
			ingredients: ["2 Phoenix Downs", "2 Ether", "5 High Potions"],
			instructions: [
				"Assemble ingredients in large cauldron.",
				"Whisper sweet nothings to the cauldron to woo the flavor.",
				"Let cauldron cool. Serve with a glass of refreshing ice-cold water."
			]
		};
	}

	handleDelete() {
		if (this.state.items.length < 2) return;

		let newItems = [].concat(this.state.items.slice(1));
		this.setState({
			items: newItems
		});
		this.saveLocalRecipes(newItems);
	}

	generateInitialData() {
		return [this.getSampleItem()];
	}

	saveLocalRecipes(items) {
		// What does the below line return? Can use its return value to handle errors?
		localStorage.setItem("_oksas_recipes", JSON.stringify(items));
	}

	moveToFront(oldArr, index) {
		let newArr = [...oldArr];
		let item = newArr.splice(index, 1)[0];
		newArr.unshift(item);
		return newArr;
	}

	handleClick(index) {
		this.setState({
			editing: false,
			items: this.moveToFront(this.state.items, index)
		});
	}

	handleSave(item) {
		let newItems = [].concat(item, this.state.items.slice(1));
		this.setState({
			editing: false,
			items: newItems
		});
		this.saveLocalRecipes(newItems);
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
			<div styleName="container">
			<Grid
			gridConfig={this.state.gridConfig}
			handleClick={this.handleClick}
			items={this.state.items}
			/>
			<RecipeTop
			item={this.state.items[0]}
			editing={this.state.editing}
			canDelete={this.state.items.length > 1}
			handleSave={this.handleSave}
			handleCancel={this.handleCancel}
			handleAdd={this.handleAdd}
			handleDelete={this.handleDelete}
			switchModes={this.handleSwitch}
			/>
			</div>
		);
	}
}

export default CSSModules(RecipeContainer, styles);

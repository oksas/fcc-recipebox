/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0*/
/*eslint react/react-in-jsx-scope: 0*/

import RecipeContainer from "../src/RecipeContainer";

import RecipeTop from "../src/RecipeTop";
import Grid from "../src/Grid";

let sampleItem = {
	id: Date.now(),
	color: "turquoise",
	title: "Rad New Recipe",
	ingredients: ["1 cup love"],
	instructions: ["Spread the love."]
};

describe("RecipeContainer", () => {
	// Define wrapper for the `it` tests in this scope level
	// But use let so we can use beforeEach in child scopes if necessary
	let wrapper = shallow(<RecipeContainer />);

	describe("Data saving and loading", () => {
		it("pulls initial data from localStorage if it exists", () => {
			localStorage.setItem("_oksas_recipes", JSON.stringify([sampleItem]));
			wrapper = shallow(<RecipeContainer />);

			expect(wrapper.state().items).to.eql(JSON.parse(localStorage._oksas_recipes));
		});

		it("creates sample data if none exist in localStorage", () => {
			localStorage.removeItem("_oksas_recipes");
			wrapper = shallow(<RecipeContainer />);

			expect(wrapper.state().items.length).to.be.above(0);
		});

		it("can delete items", () => {
			wrapper.instance().handleAdd();
			const lengthBefore = wrapper.state().items.length;

			wrapper.instance().handleDelete();
			expect(wrapper.state().items.length).to.equal(lengthBefore - 1);
		});

		it("prevents deletion of a recipe when it is the last one remaining", () => {
			wrapper.setState({ items: [sampleItem] });

			expect(wrapper.state().items.length).to.equal(1);

			wrapper.instance().handleDelete();

			expect(wrapper.state().items.length).to.equal(1);
		});

		it("properly saves updated recipes to state and storage", () => {
			const updatedItem = {
				id: 500,
				color: "green",
				title: "Chicken Fun Time",
				ingredients: ["salt", "chicken", "paprika"],
				instructions: ["bake", "stir", "consume"]
			};
			const initialLength = wrapper.state().items.length;

			wrapper.instance().handleSave(updatedItem);

			let expectedStateItems = wrapper.state().items;
			let expectedStorageItems = JSON.parse(localStorage.getItem("_oksas_recipes"));

			expect(expectedStateItems[0]).to.eql(updatedItem);
			expect(expectedStateItems.length).to.equal(initialLength);

			expect(expectedStorageItems[0]).to.eql(updatedItem);
			expect(expectedStorageItems.length).to.equal(initialLength);
		});

		it("properly adds new recipes to state and storage", () => {
			const initialLength = wrapper.state().items.length;

			wrapper.instance().handleAdd();

			let expectedStateItems = wrapper.state().items;
			let expectedStorageItems = JSON.parse(localStorage.getItem("_oksas_recipes"));

			expect(expectedStateItems.length).to.equal(initialLength + 1);

			expect(expectedStorageItems.length).to.equal(initialLength + 1);
		});

		it("properly removes new recipes from state and storage", () => {
			const itemToDelete = Object.assign({}, wrapper.state().items[0]);
			const initialLength = wrapper.state().items.length;

			wrapper.instance().handleDelete();

			let expectedStateItems = wrapper.state().items;
			let expectedStorageItems = JSON.parse(localStorage.getItem("_oksas_recipes"));

			expect(expectedStateItems[0]).to.not.eql(itemToDelete);
			expect(expectedStateItems.length).to.equal(initialLength - 1);

			expect(expectedStorageItems[0]).to.not.eql(itemToDelete);
			expect(expectedStorageItems.length).to.equal(initialLength - 1);
		});
	});

	it("can change an array in an immutable way", () => {
		const initial = [1, 2, 3, 4];
		const expected1 = [4, 1, 2, 3];
		const expected2 = [3, 1, 2, 4];
		const expected3 = [2, 1, 3, 4];
		expect(RecipeContainer.prototype.moveToFront(initial, 3)).to.eql(expected1);
		expect(RecipeContainer.prototype.moveToFront(initial, 2)).to.eql(expected2);
		expect(RecipeContainer.prototype.moveToFront(initial, 1)).to.eql(expected3);
	});

	it("renders a grid and recipe top", () => {
		expect(wrapper.containsAllMatchingElements([
			<Grid />,
			<RecipeTop />
		])).to.equal(true);
	});

	// Add some tests to check that state is properly updated with handleClick
});

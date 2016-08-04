/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0*/
/*eslint react/react-in-jsx-scope: 0*/

import RecipeDisplay from "../src/RecipeDisplay";

describe("RecipeDisplay", () => {
	const item = {
		id: "107",
		color: "blue",
		title: "Batman's Famous Chicken",
		ingredients: [
			"salt",
			"pepper",
			"eggs"
		],
		instructions: [
			"Cook everything.",
			"Eat everything.",
			"Clean everything"
		]
	};

	const wrapper = mount(<RecipeDisplay item={item} />);

	it("displays the correct number of ingredients and instructions", () => {
		// I would like there to be two expects here; one each for ingredients
		// and instructions, but enzyme for some reason doesn't seem to like
		// when I try using ".instructions p" or ".ingredients p" selectors
		const len = item.ingredients.length + item.instructions.length;

		expect(wrapper.find("p")).to.have.length(len);
	});

	it("properly assigns `.action-disabled` class to delete button based on props.canDelete", () => {
		// I don't really like the way this is setup because it's relying on the
		// delete button being the only thing to ever possibly get the
		// .action-disabled class; so this feels a bit like it's testing an
		// implementation detail and not really testing in a way it should
		// But I'm not sure how else to go about it without adding multiple classes
		// to each item (which react-css-modules discourages)
		expect(wrapper.find(".action-disabled")).to.have.length(1);
		wrapper.setProps({ canDelete: true });
		expect(wrapper.find(".action-disabled")).to.have.length(0);
	});
});

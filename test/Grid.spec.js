/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0*/
/*eslint react/react-in-jsx-scope: 0*/

import Grid from "../src/Grid";

describe("Grid", () => {
	it("renders the correct number of boxes", () => {
		var items = [];
		for (let i = 0; i < 4; i++) {
			items.push({
				id: i,
				color: "blue",
				title: `Recipe ${i}`,
				ingredients: ["salt", "chile", "paprika"],
				instructions: ["bake", "shake", "consume"]
			});
		}

		const gridConfig = {
			width: 8,
			margin: 2,
			units: "rem"
		};

		const wrapper = mount(<Grid
      gridConfig={gridConfig}
      items={items}
      handleClick={() => {}} />);

    // The -1 is because a box is EITHER a .box or .active-box, never both
		expect(wrapper.find(".box")).to.have.length(items.length - 1);
		expect(wrapper.find(".active-box")).to.have.length(1);
	});
});

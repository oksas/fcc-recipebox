/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0*/
/*eslint react/react-in-jsx-scope: 0*/

import RecipeContainer from "../src/RecipeContainer";

import RecipeTop from "../src/RecipeTop";
import Grid from "../src/Grid";

var items = [];
for (var i = 0; i < 8; i++) {
  items.push({
    color: "blue",
    title: `Recipe ${i}`,
    ingredients: ["salt", "chile", "paprika"],
    instructions: ["bake", "shake", "consume"]
  });
}
global.localStorage = { _oksas_recipes: items };

describe("RecipeContainer", () => {
  const wrapper = shallow(<RecipeContainer />);

  it("pulls initial data from localStorage", () => {
    expect(wrapper.state().items).to.equal(localStorage._oksas_recipes);
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

  it("renders a grid and a recipe top", () => {
    expect(wrapper.containsAllMatchingElements([
      <Grid />,
      <RecipeTop />
    ])).to.equal(true);
  });

  // Add some tests to check that state is properly updated with handleClick

  describe("gridConfig", () => {
    it("calculates proper <Box> width percentages", () => {
      expect(RecipeContainer.prototype.getBoxWidthPercentage(4, 5)).to.equal(17.5);
      expect(RecipeContainer.prototype.getBoxWidthPercentage(2, 10)).to.equal(40);
      expect(RecipeContainer.prototype.getBoxWidthPercentage(3, 4)).to.equal(28);
    });

    // Add check that the grid config is properly added to state

    it("generates proper gridConfig based on window screen size", () => {
      global.window.screen.width = 360;
      const expected1 = { rowLen: 2, margin: 10, width: 40, units: "%" };
      expect(wrapper.instance().getGridConfig()).to.eql(expected1);

      global.window.screen.width = 768;
      const expected2 = { rowLen: 3, margin: 10, width: 20, units: "%" };
      expect(wrapper.instance().getGridConfig()).to.eql(expected2);

      global.window.screen.width = 1024;
      const expected3 = { rowLen: 4, margin: 5, width: 17.5, units: "%" };
      expect(wrapper.instance().getGridConfig()).to.eql(expected3);
    });
  });
});

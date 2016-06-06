/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0*/
/*eslint react/react-in-jsx-scope: 0*/

import RecipeContainer from "../src/RecipeContainer";

import RecipeTop from "../src/RecipeTop";
import Grid from "../src/Grid";

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

  it("generates a gridConfig based on screen size", () => {

  });
});

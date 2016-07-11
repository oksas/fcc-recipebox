/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0*/
/*eslint react/react-in-jsx-scope: 0*/

import RecipeContainer from "../src/RecipeContainer";

import RecipeTop from "../src/RecipeTop";
import Grid from "../src/Grid";

var items = [];
for (let i = 0; i < 8; i++) {
  items.push({
    id: i,
    color: "blue",
    title: `Recipe ${i}`,
    ingredients: ["salt", "chile", "paprika"],
    instructions: ["bake", "shake", "consume"]
  });
}

describe("RecipeContainer", () => {
  const wrapper = shallow(<RecipeContainer />);

  describe("Data saving and loading", () => {
    it("pulls initial data from localStorage if it exists", () => {
      // init the appropriate teardown here?
      // expect(wrapper.state().items).to.equal(localStorage._oksas_recipes);
    });

    it("creates sample data if none exist in localStorage", () => {
      // check to see that items has a length <= 1 and item 0 has the appropriate fields
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

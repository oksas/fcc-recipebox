/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0*/
/*eslint react/react-in-jsx-scope: 0*/

import RecipeTop from "../src/RecipeTop";
import RecipeDisplay from "../src/RecipeDisplay";

describe("RecipeTop", () => {
  const item = {
    color: "blue",
    title: "Batman's Famous Chicken",
    ingredients: ["salt", "pepper", "eggs"],
    instructions: ["cook", "eat", "clean"]
  };
  const empty = () => {};

  describe("editing", () => {
    const wrapper = mount(<RecipeTop item={item}
      editing={false}
      handleSave={empty}
      handleCancel={empty}
      switchModes={empty} />);
    it("renders only a display when not editing", () => {
      expect(wrapper.find(".display")).to.have.length(1);
      expect(wrapper.find(".editor")).to.have.length(0);
    });

    it("renders both a display and editor when editing ", () => {
      wrapper.setProps({ editing: true });
      expect(wrapper.find(".display")).to.have.length(1);
      expect(wrapper.find(".editor")).to.have.length(1);
    });
  });

  it("passes the saved item up on save", () => {

  });
});

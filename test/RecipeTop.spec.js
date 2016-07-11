/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0*/
/*eslint react/react-in-jsx-scope: 0*/

import RecipeTop from "../src/RecipeTop";
import RecipeDisplay from "../src/RecipeDisplay";
import RecipeEditor from "../src/RecipeEditor";

describe("RecipeTop", () => {
  const item = {
    id: 5,
    color: "blue",
    title: "Batman's Famous Chicken",
    ingredients: ["salt", "pepper", "eggs"],
    instructions: ["cook", "eat", "clean"]
  };
  const empty = () => {};

  describe("editing", () => {
    const wrapper = shallow(<RecipeTop item={item}
      editing={false}
      handleSave={empty}
      handleCancel={empty}
      switchModes={empty} />);

    it("renders only a display when not editing", () => {
      expect(wrapper.containsMatchingElement(<RecipeDisplay />)).to.equal(true);
      expect(wrapper.containsMatchingElement(<RecipeEditor />)).to.equal(false);
    });

    it("renders display and editor when editing", () => {
      wrapper.setProps({ editing: true });

      expect(wrapper.containsAllMatchingElements([
        <RecipeDisplay />,
        <RecipeEditor />
      ])).to.equal(true);
    });
  });
});

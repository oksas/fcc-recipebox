/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0*/
/*eslint react/react-in-jsx-scope: 0*/

import RecipeDisplay from "../src/RecipeDisplay";

describe("RecipeDisplay", () => {
  it("displays the correct number of ingredients and instructions", () => {
    const item = {
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

    const wrapper = shallow(<RecipeDisplay item={item} />);
    // I would like there to be two expects here; one each for ingredients
    // and instructions, but enzyme for some reason doesn't seem to like
    // when I try using ".instructions p" or ".ingredients p" selectors
    const len = item.ingredients.length + item.instructions.length;
    expect(wrapper.find("p")).to.have.length(len);
  });
});

/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0*/
/*eslint react/react-in-jsx-scope: 0*/

import RecipeEditor from "../src/RecipeEditor";

describe("RecipeEditor", () => {
  const item = {
    color: "blue",
    title: "Batman's Famous Chicken",
    ingredients: ["salt", "pepper", "eggs"],
    instructions: ["cook", "eat", "clean"]
  };

  it("renders ingredients and instructions separated by a newline", () => {
    const wrapper = mount(<RecipeEditor initialItem={item} onSave={() => {}} onCancel={() => {}} />);
    expect(wrapper.find("[name='ingredients']").text()).to.equal("salt\npepper\neggs");
    expect(wrapper.find("[name='instructions']").text()).to.equal("cook\neat\nclean");
  });

  describe("onChange", () => {
    const wrapper = mount(<RecipeEditor initialItem={item} onSave={() => {}} onCancel={() => {}} />);

    it("updates the title when edited", () => {
      const event = { target: { value: "Cloud's Famous Lamb", name: "title" } };

      wrapper.find("[name='title']").simulate("change", event);
      expect(wrapper.state("item").title).to.equal(event.target.value);
    });

    it("updates the ingredients when edited", () => {
      // Do I manually input the string? Or do I define the array, set the value
      // as the array that's been .join'd? I sense that the rules when testing
      // might be slightly different than otherwise
      const event = { target: { value: "spice\nice\nrice", name: "ingredients" } };
      const expected = ["spice", "ice", "rice"];

      // This seems smelly
      // But .to.equal does not seem to do any deep array comparison
      wrapper.find("[name='ingredients']").simulate("change", event);
      const ingredients = wrapper.state("item").ingredients;
      expect(ingredients[0]).to.equal(expected[0]);
      expect(ingredients[1]).to.equal(expected[1]);
      expect(ingredients[2]).to.equal(expected[2]);
    });

    it("updates the instructions when edited", () => {
      const event = { target: { value: "eat\npray\nlove", name: "instructions" } };
      const expected = ["eat", "pray", "love"];

      wrapper.find("[name='instructions']").simulate("change", event);
      const instructions = wrapper.state("item").instructions;
      expect(instructions[0]).to.equal(expected[0]);
      expect(instructions[1]).to.equal(expected[1]);
      expect(instructions[2]).to.equal(expected[2]);
    });
  });
});

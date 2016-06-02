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
  const empty = () => {};

  it("renders ingredients and instructions separated by a newline", () => {
    const wrapper = mount(<RecipeEditor initialItem={item} onSave={empty} onCancel={empty} />);

    expect(wrapper.find("[name='ingredients']").text()).to.equal("salt\npepper\neggs");
    expect(wrapper.find("[name='instructions']").text()).to.equal("cook\neat\nclean");
  });

  it("passes up the current state's item on save", () => {
    const itemSaved = spy();
    const wrapper = shallow(<RecipeEditor initialItem={item} onSave={itemSaved} onCancel={empty} />);
    wrapper.instance().handleSave();

    expect(itemSaved.calledOnce).to.equal(true);
    expect(itemSaved.calledWith(item)).to.equal(true);
  });

  describe("onChange", () => {
    const wrapper = shallow(<RecipeEditor initialItem={item} onSave={empty} onCancel={empty} />);

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

      wrapper.find("[name='ingredients']").simulate("change", event);
      const ingredients = wrapper.state("item").ingredients;
      expect(ingredients).to.eql(expected);
    });

    it("updates the instructions when edited", () => {
      const event = { target: { value: "eat\npray\nlove", name: "instructions" } };
      const expected = ["eat", "pray", "love"];
      wrapper.find("[name='instructions']").simulate("change", event);
      const instructions = wrapper.state("item").instructions;

      expect(instructions).to.eql(expected);
    });
  });
});

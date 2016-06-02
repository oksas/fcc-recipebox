/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0*/
/*eslint react/react-in-jsx-scope: 0*/

import Grid from "../src/Grid";

describe("Grid", () => {
  it("renders the correct number of boxes", () => {
    const gridConfig = {
      width: 8,
      margin: 2,
      units: "rem",
      rowLen: 4
    };
    const items = [
      { color: "red", title: "rofl" },
      { color: "blue", title: "heheh" },
      { color: "red", title: "hahaha" }
    ];
    const wrapper = mount(<Grid
      gridConfig={gridConfig}
      items={items}
      handleClick={() => {}} />);

    expect(wrapper.find(".box")).to.have.length(2);
    expect(wrapper.find(".active-box")).to.have.length(1);
  });
});

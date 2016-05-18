/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0*/

import Thing from "../src/Thing";

describe("Thing", () => {
  it("has the proper class", () => {
    const wrapper = shallow(<Thing />);
    expect(wrapper.prop("className")).to.eql("test");
  });

  it("is a div", () => {
    const wrapper = shallow(<Thing />);
    expect(wrapper.type()).to.eql("div");
  });

  it("calls componentDidMount", () => {
    spy(Thing.prototype, "componentDidMount");
    const wrapper = mount(<Thing onMount={() => {}} />);
    expect(Thing.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});

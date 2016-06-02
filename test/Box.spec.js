/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0*/
/*eslint react/react-in-jsx-scope: 0*/

import Box from "../src/Box";
import { spring } from "react-motion";

describe("Box", () => {
  describe("classes", () => {
    const item = { color: "red", title: "rofl" };
    const count = 8;
    const gridConfig = {
      width: 8,
      margin: 2,
      units: "rem",
      rowLen: 4
    };

    it("has .box when index not 0", () => {
      const index = 1;
      const wrapper = mount(<Box
                              gridConfig={gridConfig}
                              item={item}
                              index={index}
                              count={count}
                              handleClick={() => {}} />);

      expect(wrapper.find(".box")).to.have.length(1);
    });

    it("has .active-box when index is 0", () => {
      const index = 0;
      const wrapper = mount(
        <Box
          gridConfig={gridConfig}
          item={item}
          index={index}
          count={count}
          handleClick={() => {}} />);

      expect(wrapper.find(".active-box")).to.have.length(1);
    });
  });

  describe("helper functions", () => {
    it("properly calculates what row it's in", () => {
      expect(Box.prototype.getItemRowIndex(2, 3)).to.equal(0);
      expect(Box.prototype.getItemRowIndex(6, 4)).to.equal(1);
      expect(Box.prototype.getItemRowIndex(12, 2)).to.equal(6);
    });

    it("properly calculates its index in its row", () => {
      expect(Box.prototype.getIndexInRow(2, 3)).to.equal(2);
      expect(Box.prototype.getIndexInRow(6, 4)).to.equal(2);
      expect(Box.prototype.getIndexInRow(12, 2)).to.equal(0);
    });
  });

  describe("styles", () => {
    const item = { color: "red", title: "rofl" };
    const count = 8;
    const gridConfig = {
      width: 8,
      margin: 2,
      units: "rem",
      rowLen: 4
    };

    it("has the correct translate3d applied", () => {
      const wrapperA = mount(
        <Box
          gridConfig={gridConfig}
          item={item}
          index={4}
          count={count}
          handleClick={() => {}} />);

      expect(wrapperA).to.have.style("transform", "translate3d(0rem, 10rem, 0)");

      const wrapperB = mount(
        <Box
          gridConfig={gridConfig}
          item={item}
          index={6}
          count={count}
          handleClick={() => {}} />);

      expect(wrapperB).to.have.style("transform", "translate3d(20rem, 10rem, 0)");
    });

    it("has the proper z-index applied", () => {
      const wrapperA = mount(
        <Box
          gridConfig={gridConfig}
          item={item}
          index={0}
          count={count}
          handleClick={() => {}} />);

      expect(wrapperA).to.have.style("z-index", "99");

      const wrapperB = mount(
        <Box
          gridConfig={gridConfig}
          item={item}
          index={4}
          count={count}
          handleClick={() => {}} />);

      expect(wrapperB).to.have.style("z-index", "4");
    });
  });
});

/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0*/

import Box from "../src/Box";
import { spring } from "react-motion";

function getItemRowIndex(index, rowLen) {
  return Math.ceil((index + 1) / rowLen) - 1;
}

function getIndexInRow(index, rowLen) {
  return index % rowLen;
}

describe("Box", () => {
  it("has .active-class when index is 0", () => {
    const index = 1;
    const width = 8;
    const margin = 2;
    const units = "rem";
    const rowLen = 4;
    const x = (width + margin) * getIndexInRow(index, rowLen);
    const y = (width + margin) * getItemRowIndex(index, rowLen);
    const item = { color: "red", title: "rofl" };
    const style = {
      backgroundColor: "red",
      translateX: spring(x),
      translateY: spring(y)
    };

    const wrapper = mount(<Box style={style} item={item} index={index} handleClick={() => {}} />);
    // console.log(wrapper.find("box").length);
    expect(wrapper.find(".box")).to.have.length(1);
  });
});

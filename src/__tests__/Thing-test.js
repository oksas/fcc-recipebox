import React from "react";
import { expect } from "chai";
import { mount, shallow, render } from "enzyme";

import Thing from "../Thing";

describe("Thing", () => {
  it("says hello", () => {
    expect(shallow(<Thing />).contains(<div className="test" />)).to.equal(true);
  });
});

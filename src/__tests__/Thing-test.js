/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0*/

import React from "react";
import { expect } from "chai";
import { mount, shallow, render } from "enzyme";

import Thing from "../Thing";

describe("Thing", () => {
  it("says hello", () => {
    expect(shallow(<Thing />).contains(<div className="hah" />)).to.equal(true);
  });
});

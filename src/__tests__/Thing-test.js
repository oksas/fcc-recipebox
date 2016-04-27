import React from "react";
import expect from "expect";
import { createRenderer } from "react-addons-test-utils";
import expectJSX from "expect-jsx";
expect.extend(expectJSX);

import Thing from "../Thing";

describe("Thing", () => {
  it("says hello", () => {
    let renderer = createRenderer();
    renderer.render(<Thing/>);
    let actual = renderer.getRenderOutput();
    let expected = <div>Hello!</div>;
    expect(actual).toEqualJSX(expected);
  });
});

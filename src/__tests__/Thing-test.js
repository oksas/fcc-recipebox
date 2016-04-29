import React from "react";
import expect from "expect";
import { createRenderer } from "react-addons-test-utils";
import expectJSX from "expect-jsx";
expect.extend(expectJSX);

import Thing from "../Thing";

describe("Thing", () => {
  it("says hello", () => {
    let renderer = createRenderer();
    renderer.render(<Thing onClick={() => {}} />);
    let actual = renderer.getRenderOutput();
    let expected = <div onClick={() => {}}>Hello!</div>;
    expect(actual).toEqualJSX(expected);
  });

  it("clicks", () => {
    let renderer = createRenderer();
    let clicker = expect.createSpy();
    renderer.render(<Thing onClick={clicker} />);
    renderer.getRenderOutput().props.onClick();
    expect(clicker).toHaveBeenCalled();
  });
});

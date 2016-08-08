/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0*/
/*eslint react/react-in-jsx-scope: 0*/

import Box from "../src/Box";
import { spring } from "react-motion";

describe("Box", () => {
	const item = {
		id: 22,
		color: "red",
		title: "rofl",
		ingredients: ["sup"],
		instructions: ["sup"]
	};

	describe("classes", () => {
		const count = 8;
		const gridConfig = {
			margin: 1,
			width: 3,
			units: "rem"
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

	describe("styles", () => {
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

			expect(wrapperA).to.have.style("transform", "translate3d(0, 40rem, 0)");

			const wrapperB = mount(
        <Box
          gridConfig={gridConfig}
          item={item}
          index={6}
          count={count}
          handleClick={() => {}} />);

			expect(wrapperB).to.have.style("transform", "translate3d(0, 60rem, 0)");
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

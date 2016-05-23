import React from "react";
import { Motion, spring } from "react-motion";
import CSSModules from "react-css-modules";
import styles from "./styles/test.scss";

import Box from "./Box";

class Grid extends React.Component {
  render() {
    const count = this.props.items.length;
    return (
			<div className="grid">
				{
          this.props.items.map((item, index) => {
            return (
							<Box
                gridConfig={this.props.gridConfig}
                item={item}
                index={index}
                count={count}
                handleClick={() => {}} />
						);
          })
				}
			</div>
		);
  }
}

export default CSSModules(Grid, styles);

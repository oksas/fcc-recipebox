import React from "react";
import { Motion } from "react-motion";
import CSSModules from "react-css-modules";
import styles from "./styles/test.scss";

class Box extends React.Component {
  render() {
    const index = this.props.index;
    const style = this.props.style;
    const item = this.props.item;
    const count = 5;
    const units = 4;
    return (
      <Motion key={item.color} style={style}>
				{ ({translateX, translateY, backgroundColor}) =>
					<div
						onClick={this.props.handleClick.bind(null, index)}
						className={index === 0 ? "active-box" : "box"}
						style={{
              backgroundColor: item.color,
              zIndex: index === 0 ? 99 : count - index,
							transform: `translate3d(${translateX}${units}, ${translateY}${units}, 0)`,
					}}>
						{item.title}
					</div>
				}
			</Motion>
    );
  }
}

export default CSSModules(Box, styles);

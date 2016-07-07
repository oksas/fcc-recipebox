import React from "react";
import { Motion, spring } from "react-motion";

class Box extends React.Component {
  render() {
    const { width, margin, units } = this.props.gridConfig;
    const { index, count, item } = this.props;
    const y = (width + margin) * index;
    const style = {
      translateY: spring(y)
    };
    return (
      <Motion key={item.color} style={style}>
				{ ({translateY, backgroundColor}) =>
					<div
						onClick={this.props.handleClick.bind(null, index)}
            className={index === 0 ? "active-box" : "box"}
            style={{
              backgroundColor: item.color,
              zIndex: index === 0 ? 99 : count - index,
              transform: `translate3d(0, ${translateY}${units}, 0)`,
              width: `${width}${units}`,
              height: `${width}${units}`
            }}>
						<span className="box-label">{this.props.item.title[0]}</span>
					</div>
				}
			</Motion>
    );
  }
}

Box.propTypes = {
  gridConfig: React.PropTypes.shape({
    rowLen: React.PropTypes.number,
    margin: React.PropTypes.number,
    width: React.PropTypes.number,
    units: React.PropTypes.string
  }).isRequired,
  item: React.PropTypes.shape({
    color: React.PropTypes.string,
    title: React.PropTypes.string,
    ingredients: React.PropTypes.array,
    instructions: React.PropTypes.array
  }).isRequired,
  index: React.PropTypes.number.isRequired,
  count: React.PropTypes.number.isRequired,
  handleClick: React.PropTypes.func.isRequired
};

export default Box;

import React from "react";
import { Motion, spring } from "react-motion";

class Box extends React.Component {
  getItemRowIndex(index, rowLen) {
    return Math.ceil((index + 1) / rowLen) - 1;
  }

  getIndexInRow(index, rowLen) {
    return index % rowLen;
  }

  render() {
    const { rowLen, width, margin, units } = this.props.gridConfig;
    const { index, count, item } = this.props;
    const x = (width + margin) * this.getIndexInRow(index, rowLen);
    const y = (width + margin) * this.getItemRowIndex(index, rowLen);
    const style = {
      translateX: spring(x),
      translateY: spring(y)
    };
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
  item: React.PropTypes.object.isRequired,
  index: React.PropTypes.number.isRequired,
  count: React.PropTypes.number.isRequired,
  handleClick: React.PropTypes.func.isRequired
};

export default Box;

import React from "react";
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
                key={item.title}
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

Grid.propTypes = {
  gridConfig: React.PropTypes.shape({
    rowLen: React.PropTypes.number,
    width: React.PropTypes.number,
    margin: React.PropTypes.number,
    units: React.PropTypes.string
  }).isRequired,
  items: React.PropTypes.array.isRequired,
  handleClick: React.PropTypes.func.isRequired
};

export default CSSModules(Grid, styles);

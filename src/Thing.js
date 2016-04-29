import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/test.scss";

class Thing extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick} styleName="test">
        Hello!
      </div>
    );
  }
}

Thing.propTypes = {
  onClick: React.PropTypes.func.isRequired
};

export default CSSModules(Thing, styles);

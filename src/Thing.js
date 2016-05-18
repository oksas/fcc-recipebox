import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/test.scss";

class Thing extends React.Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div styleName="test" />
    );
  }
}

export default CSSModules(Thing, styles);

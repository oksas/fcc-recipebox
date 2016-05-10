import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/test.scss";

class Thing extends React.Component {
  render() {
    return (
      <div className="hah" />
    );
  }
}

export default CSSModules(Thing, styles);
// export default Thing;

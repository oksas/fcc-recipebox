import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/test.scss";
import {Motion, spring} from "react-motion";

class Thing extends React.Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div styleName="test">
        hey sup there! this is test, hello catdoig
        <h1>hiiiiii rOFLMALO</h1>
        <Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
          {value => <div>{value.x}</div>}
        </Motion>
      </div>
    );
  }
}

export default CSSModules(Thing, styles);

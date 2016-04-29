import React from "react";

class Thing extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        Hello!
      </div>
    );
  }
}

Thing.propTypes = {
  onClick: React.PropTypes.func.isRequired
};

export default Thing;

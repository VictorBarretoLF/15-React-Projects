import React, { Component } from "react";

class Alert extends Component {
  render() {
    const { type, msg } = this.props;
    return <p className={`alert alert-${type}`}>{msg}</p>;
  }
}

export default Alert;

import React, { Component } from "react";

class Alert extends Component {
  timer = null;

  componentDidMount = () => {
    this.timer = setTimeout(() => this.props.removeAlert(), 5000);
  };

  componentDidUpdate = () => {
    clearTimeout(this.timer)
    this.timer = setTimeout(() => this.props.removeAlert(), 5000);
  }

  componentWillUnmount = () => {
    clearTimeout(this.timer);
  };

  render() {
    const { type, msg } = this.props;
    return <p className={`alert alert-${type}`}>{msg}</p>;
  }
}

export default Alert;

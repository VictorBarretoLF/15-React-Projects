import React, { Component } from "react";
import rgbToHex from "../utils/utils";

class SingleColor extends Component {
  constructor() {
    super();
    this.state = {
      alert: false,
    };
  }

  render() {
    const { weight, rgb, index } = this.props;
    const { alert } = this.state;
    const bcg = rgb.join(",");
    const hexValue = rgbToHex(...rgb);

    return (
      <article
        className={`color ${index > 10 && "color-light"}`}
        style={{
          backgroundColor: `rgb(${bcg})`,
        }}
        onClick={() => {
          this.setState({ alert: true });
          navigator.clipboard.writeText(hexValue);
          const timeout = setTimeout(() => {
            this.setState({ alert: false });
          }, 3000);
          return () => clearTimeout(timeout);
        }}
      >
        <p className="percent-value">{weight}%</p>
        <p className="color-value">{hexValue}</p>
        {alert && <p className="alert">copied to clipboard</p>}
      </article>
    );
  }
}

export default SingleColor;

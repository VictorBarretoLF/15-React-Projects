import React, { Component } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

class Question extends Component {
  constructor() {
    super();
    this.state = {
      showInfo: false,
    };
  }

  render() {
    const { title, info } = this.props;
    const { showInfo } = this.state;

    return (
      <article className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn">
            <AiOutlinePlus />
          </button>
        </header>
        {showInfo && <p>{info}</p>}
      </article>
    );
  }
}

export default Question;

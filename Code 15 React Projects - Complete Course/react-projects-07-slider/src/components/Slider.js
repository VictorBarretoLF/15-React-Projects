import React, { Component } from "react";
import people from "../utils/data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      people: people,
      index: 0,
    };
  }

  render() {
    return (
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span>reviews
          </h2>
        </div>
        <div className="section-center">
          {this.state.people.map(({ id, image, name, title, quote }, index) => {
            let position = "nextSlide";
            if (index === this.state.index) position = "activeSlide";
            if (
              this.state.index === index - 1 ||
              (index === 0 && index === this.state.people.length - 1)
            )
              position = "lastSlide";
            return (
              <article className={position} key={id}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}
          <button
            className="prev"
            onClick={() => {
              this.setState({ index: this.state.index - 1 });
            }}
          >
            <FiChevronLeft />
          </button>
          <button
            className="next"
            onClick={() => {
              this.setState({ index: this.state.index + 1 });
            }}
          >
            <FiChevronRight />
          </button>
        </div>
      </section>
    );
  }
}

export default Slider;

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
      pause: true,
    };
  }

  nextSlide = () => {
    const lastIndex = this.state.people.length - 1;
    const next = this.state.index + 1;
    if (next > lastIndex) this.setState({ index: 0 });
    else this.setState({ index: next });
  };

  prevSlide = () => {
    const lastIndex = this.state.people.length - 1;
    const prev = this.state.index - 1;
    if (prev < 0) this.setState({ index: lastIndex });
    else this.setState({ index: prev });
  };

  componentDidMount() {
    setInterval(() => {
      if (this.state.pause) this.nextSlide();
    }, 5000);
  }

  render() {
    return (
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span>reviews
          </h2>
        </div>
        <div
          className="section-center"
          onMouseLeave={() => {
            this.setState({ pause: true });
          }}
          onMouseOver={() => {
            this.setState({ pause: false });
          }}
        >
          {this.state.people.map(
            ({ id, image, name, title, quote }, personIndex) => {
              let position = "nextSlide";
              if (personIndex === this.state.index) position = "activeSlide";
              if (
                personIndex === this.state.index - 1 ||
                (this.state.index === 0 &&
                  personIndex === this.state.people.length - 1)
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
            }
          )}
          <button className="prev" onClick={this.prevSlide}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={this.nextSlide}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    );
  }
}

export default Slider;

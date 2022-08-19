import React, { Component } from "react";
import { reviews } from "../utils/data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

class Review extends Component {
  constructor() {
    super();
    this.index = 0;
    this.state = {
      review: reviews[this.index],
    };
  }

  nextPerson = () => {
    this.index = this.index > reviews.length - 2 ? 0 : this.index + 1;
    this.setState({ review: reviews[this.index] });
  };

  prevPerson = () => {
    this.index = this.index === 0 ? reviews.length - 1 : this.index - 1;
    this.setState({ review: reviews[this.index] });
  };

  randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === this.index) {
      randomNumber++;
    }
    this.setState({ review: reviews[randomNumber] });
  };

  render() {
    const { image, name, job, text } = this.state.review;
    const { nextPerson, prevPerson, randomPerson } = this;

    return (
      <article className="review">
        <div className="review__img-container">
          <img
            src={image}
            alt={name}
            className="review__img-container--person"
          />
          <span className="review__img-container--icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="review__author">{name}</h4>
        <p className="review__job">{job}</p>
        <p className="review__info">{text}</p>
        <div>
          <button className="review__prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="review__next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="review__random-btn" onClick={randomPerson}>
          surprise me
        </button>
      </article>
    );
  }
}

export default Review;

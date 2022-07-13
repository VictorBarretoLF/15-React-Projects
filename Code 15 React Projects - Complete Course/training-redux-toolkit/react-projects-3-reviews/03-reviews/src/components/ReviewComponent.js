import "../components/scss/review.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

import {
  currentIndex,
  nextReview,
  prevReview,
  randomReview,
} from "../features/reviewSlice";

import { reviews } from "../utils/data";

const ReviewComponent = () => {
  const index = useSelector(currentIndex);
  const { image, name, job, text } = reviews[index];

  const dispatch = useDispatch();

  const nextPerson = () => dispatch(nextReview());
  const prevPerson = () => dispatch(prevReview());
  const randomPerson = () => dispatch(randomReview());

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"></img>
        <span className="quote-icon">
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
        <button className="random-btn" onClick={randomPerson}>
          surprise me
        </button>
      </div>
    </article>
  );
};

export default ReviewComponent;

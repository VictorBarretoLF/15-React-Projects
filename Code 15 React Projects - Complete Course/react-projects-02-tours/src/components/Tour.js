import { useState } from "react";
import { useDispatch } from "react-redux";
import { remoteTour } from "../features/toursSlice";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const dispatch = useDispatch();

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="single-tour__tour-info">
          <h4>{name}</h4>
          <h4 className="single-tour__tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => {
              setReadMore(!readMore);
            }}
            className="single-tour__read-more-btn"
          >
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
        <button
          className="single-tour__delete-btn"
          onClick={() => {
            dispatch(remoteTour(id));
          }}
        >
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;

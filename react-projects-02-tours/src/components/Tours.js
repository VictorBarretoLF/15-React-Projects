import React, { Component } from "react";
import Tour from "./Tour";

class Tours extends Component {
  render() {
    const { tours, removeTour } = this.props;

    return (
      <section>
        <div className="title">
          <h2>our tours</h2>
          <div className="title__underline"></div>
        </div>
        <div>
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
          })}
        </div>
      </section>
    );
  }
}

export default Tours;

// <article key={id} className="single-tour">
// <img src={image} alt={name} />
// <footer>
//   <div className="tour-info">
//     <h4>{name}</h4>
//     <h4 className="tour-price">${price}</h4>
//   </div>
//   <p>{info}</p>
//   <button className="delete-btn" onClick={() => removeTour(id)}>
//     not interested
//   </button>
// </footer>
// </article>

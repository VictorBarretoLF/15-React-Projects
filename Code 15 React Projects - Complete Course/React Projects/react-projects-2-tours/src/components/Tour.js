import React, { Component } from "react";

class Tour extends Component {
  constructor() {
    super();
    this.state = {
      readMore: false,
    };
  }

  render() {
    const { id, image, info, name, price, removeTour } = this.props;
    const { readMore } = this.state;

    return (
      <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button
              onClick={() => {
                this.setState({
                  readMore: !this.state.readMore,
                });
              }}
            >
              {readMore ? "show less" : "  read more"}
            </button>
          </p>
          <button className="delete-btn" onClick={() => removeTour(id)}>
            not interested
          </button>
        </footer>
      </article>
    );
  }
}

export default Tour;

import React, { Component } from "react";
import people from "../utils/data";

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
            return (
              <article key={id}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Slider;

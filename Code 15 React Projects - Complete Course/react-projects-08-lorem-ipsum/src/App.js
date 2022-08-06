import React, { Component } from "react";
import data from "./utils/data/data";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      text: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(this.state.count);

    if (amount <= 0) amount = 1;
    if (amount > 8) amount = 8;

    this.setState({ text: data.slice(0, amount) });
  };

  onChangeHandler = (e) => {
    const { value } = e.target;
    if (value >= 0) this.setState({ count: value });
  };

  render() {
    const { count } = this.state;
    const { onChangeHandler, handleSubmit } = this;
    return (
      <section className="section-center">
        <h1>tired of boring lorem ipsum?</h1>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">paragraphs:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            max="40"
            autoComplete="true"
            onChange={onChangeHandler}
            value={count}
          />
          <button className="btn">generate</button>
        </form>
        <article className="lorem-text">
          {this.state.text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </section>
    );
  }
}

export default App;

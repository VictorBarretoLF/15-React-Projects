import React, { Component, Fragment } from "react";
import "./App.css";

import Values from "values.js";
import SingleColor from "./components/SingleColor";

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: "",
      error: false,
      list: new Values('#f15025').all(10),
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(this.state.color).all(10);
      this.setState({ error: false, list : colors});
      console.log(this.state)
    } catch (error) {
      this.setState({ error: true });
      console.error(error);
    }
  };

  render() {
    return (
      <Fragment>
        <section className="container">
          <h3>color generator</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.color}
              onChange={(e) => {
                this.setState({ color: e.target.value });
              }}
              placeholder="#f15025"
              className={`${this.state.error ? "error" : null}`}
            />
            <button className="btn" type="submit">
              submit
            </button>
          </form>
        </section>
        <section className="colors">
          {this.state.list.map((color, index) => {
            return <SingleColor key={index} index={index} {...color} />;
          })}
        </section>
      </Fragment>
    );
  }
}

export default App;

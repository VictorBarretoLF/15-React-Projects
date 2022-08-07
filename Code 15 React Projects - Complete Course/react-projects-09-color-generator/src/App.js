import React, { Component, Fragment } from "react";
import "./App.css";

import Values from "values.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: "",
      error: false,
      list: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(this.state.color).all(10);
      console.log(colors);
    } catch (error) {
      this.setState({error : true})
      console.error(error)
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
              className={`${this.state.error ? 'error' : null}`}
            />
            <button className="btn" type="submit">
              submit
            </button>
          </form>
        </section>
        <section className="colors">
          <h4>list goes here</h4>
        </section>
      </Fragment>
    );
  }
}

export default App;

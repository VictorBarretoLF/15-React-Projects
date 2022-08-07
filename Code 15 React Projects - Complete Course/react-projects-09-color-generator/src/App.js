import React, { Component, Fragment } from "react";
import "./App.css";

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
    console.log("hello");
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
                console.log(e);
              }}
              placeholder="#f15025"
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

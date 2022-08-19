import React, { Component } from "react";
import Review from "./components/Review";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <main>
        <section className="container">
          <div className="container__title">
            <h2>our reviews</h2>
            <div className="container__underline"></div>
          </div>
          <Review />
        </section>
      </main>
    );
  }
}

export default App;

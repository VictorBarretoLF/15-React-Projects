import React, { Component } from "react";
import Review from "./components/Review";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main>
        <section className="container">
          <div className="title">
            <h2>our reviews</h2>
            <div className="underline"></div>
          </div>
          <Review />
        </section>
      </main>
    );
  }
}

export default App;

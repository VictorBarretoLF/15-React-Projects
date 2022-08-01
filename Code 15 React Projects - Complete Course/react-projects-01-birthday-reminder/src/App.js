import { Component } from "react";
import "./App.scss";
import List from "./components/List";
import { birthdays } from "./data/birthdays";

class App extends Component {
  constructor() {
    super();
    this.onClickHandler = this.onClickHandler.bind(this);
    this.state = {
      people: birthdays,
    };
  }

  onClickHandler() {
    this.setState({
      people: [],
    });
  }

  render() {
    const { people } = this.state;
    const { onClickHandler } = this;

    return (
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button onClick={onClickHandler}>clear all</button>
        </section>
      </main>
    );
  }
}

export default App;

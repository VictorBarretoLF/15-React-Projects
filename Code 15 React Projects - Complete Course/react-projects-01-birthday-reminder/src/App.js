import { Component } from "react";
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
          <button
            onClick={onClickHandler}
            className="block w-full border-transparent bg-clrPink mx-auto mt-8 mb-0 capitalize text-xl px-0 py-2 tracking-[0.1rem] rounded outline-1 outline outline-[#f28ab2cc]"
          >
            clear all
          </button>
        </section>
      </main>
    );
  }
}

export default App;

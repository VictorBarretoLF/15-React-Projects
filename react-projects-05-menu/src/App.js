import React, { Component } from "react";
import "./App.css";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import data from "./utils/data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuItems: data,
      categories: ["all", ...new Set(data.map((item) => item.category))],
    };
  }

  filterItems = (category) => {
    if (category === "all") this.setState({ menuItems: data });
    else {
      const newItems = data.filter((item) => item.category === category);
      this.setState({ menuItems: newItems });
    }
  };

  render() {
    const { filterItems } = this;
    const { menuItems, categories } = this.state;
    return (
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Categories filterItems={filterItems} categories={categories} />
          <Menu items={menuItems} />
        </section>
      </main>
    );
  }
}

export default App;

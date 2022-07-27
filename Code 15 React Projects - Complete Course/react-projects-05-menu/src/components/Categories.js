import React, { Component } from "react";

class Categories extends Component {
  render() {
    const { filterItems, categories } = this.props;
    return (
      <div className="btn-container">
        {categories.map((item, index) => {
          return (
            <button
              className="filter-btn"
              key={index}
              onClick={() => {
                filterItems(item);
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
    );
  }
}

export default Categories;

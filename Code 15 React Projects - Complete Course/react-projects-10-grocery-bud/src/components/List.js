import React, { Component } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

class List extends Component {
  render() {
    const { items } = this.props;

    return (
      <div className="grocery-list">
        {items.map(({ id, title }) => {
          return (
            <article key={id} className="grocery-item">
              <p className="title">{title}</p>
              <div className="btn-container">
                <button type="button" className="edit-btn">
                  <FaEdit />
                </button>
                <button type="button" className="delete-btn">
                  <FaTrash />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    );
  }
}

export default List;

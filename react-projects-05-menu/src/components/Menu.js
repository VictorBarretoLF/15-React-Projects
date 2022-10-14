import React, { Component } from "react";

class Menu extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className="section-center">
        {items.map(({ id, title, img, desc, price }) => {
          return (
            <article key={id} className="menu-item">
              <img src={img} alt={title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">{price}</h4>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    );
  }
}

export default Menu;

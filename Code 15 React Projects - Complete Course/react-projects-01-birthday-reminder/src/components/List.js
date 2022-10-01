import React, { Component } from "react";

class List extends Component {
  render() {
    const { people } = this.props;
    return (
      <>
        {people.map(({ id, name, age, image }) => {
          return (
            <article
              key={id}
              className="person grid grid-cols-auto-1 gap-3 mb-6 items-center "
            >
              <img
                className="w-[75px] h-[75px] object-cover rounded-full shadow-lightShadow"
                src={image}
                alt={name}
              />
              <div>
                <h4 className="mb-1 font-bold">{name}</h4>
                <p className="mb-0">{age} years</p>
              </div>
            </article>
          );
        })}
      </>
    );
  }
}

export default List;

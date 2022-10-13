import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="bg-clrWhite rounded my-8 mx-0 shadow-lg transition-shadow hover:shadow-xl">
      <img
        className="w-full h-80 object-cover rounded-t"
        src={image}
        alt={name}
      />
      <footer className="py-6 px-8">
        <div className="flex justify-between items-center mb-4">
          <h4>{name}</h4>
          <h4 className="bg-clrPrimary10 rounded px-2 py-1 text-clrPrimay5">
            ${price}
          </h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => setReadMore(!readMore)}
            className="bg-transparent cursor-pointer text-clrPrimary5 pl-0.5 capitalize"
          >
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
        <button
          className="block mt-4 mx-auto text-clrRedDark bg-transparent px-2 py-1 tracking-widest rounded border border-solid border-clrRedDark capitalize cursor-pointer w-52 font-medium"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;

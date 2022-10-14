import { useState } from "react";
import List from "./components/List";
import { birthdays } from "./data/birthdays";

const App = () => {
  const [people, setPeople] = useState(birthdays);

  const onClickHandler = () => {
    setPeople([]);
  };

  return (
    <main className="min-h-screen flex justify-center items-center">
      <section className="w-[90vw] max-w-fixedWidth bg-[#fff] rounded px-6 py-8 shadow-darkShadow my-20 mx-0">
        <h3 className="normal-case font-medium mb-6  md:text-[1.75rem]">
          {people.length} birthdays today
        </h3>
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
};

export default App;

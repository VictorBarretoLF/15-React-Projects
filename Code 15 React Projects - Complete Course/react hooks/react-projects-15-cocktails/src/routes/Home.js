import React, { useState } from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <SearchForm setSearch={setSearch}/>
      <CocktailList search={search} />
    </div>
  );
};

export default Home;

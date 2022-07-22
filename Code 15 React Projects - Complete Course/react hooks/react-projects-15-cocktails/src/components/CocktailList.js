import React, { useEffect, useState } from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import "./scss/cocktail-list.styles.scss";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const CocktailList = () => {
  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchDrinks();
  }, []);

  useEffect(() => {
    fetchDrinks();
  }, [search]);

  const fetchDrinks = async () => {
    setLoading(true);
    const response = await fetch(`${BASE_URL}${search}`);
    const data = await response.json();
    const { drinks } = data;

    const cleanCocktails = drinks.map(
      ({ idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass }) => {
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      }
    );

    setCocktails(cleanCocktails);
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((cocktail) => {
          return <Cocktail key={cocktail.id} {...cocktail} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;

import React, { useEffect, useState } from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const CocktailList = ({ search }) => {
  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetchDrinks();
  }, []);

  useEffect(() => {
    // procurar entender o porquê esse useEffect é acionado quando o state não mudou.
    // resolvido o de cahar a api várias vezes usando um if statement
    if (search !== "") {
      fetchDrinks();
    }
  }, [search]);

  const fetchDrinks = async () => {
    setLoading(true);

    const response = await fetch(`${BASE_URL}${search}`);
    const data = await response.json();
    const { drinks } = data;

    if (drinks) {
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
    } else {
      setCocktails([]);
    }

    setLoading(true);
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

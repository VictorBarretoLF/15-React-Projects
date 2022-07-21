import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./scss/cocktail-list.styles.scss";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const CocktailList = () => {
  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchDrinks();
  }, []);

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
    return <h1>Loading</h1>;
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((cocktail) => {
          return (
            <article className="cocktail">
              <div className="img-container">
                <img src={cocktail.image} alt={cocktail.name}></img>
              </div>
              <div className="cocktail-footer">
                <h3>{cocktail.name}</h3>
                <h4>{cocktail.glass}</h4>
                <p>{cocktail.info}</p>
                <Link className='btn btn-primary btn-details' to={`/cocktail/${cocktail.id}`}>details</Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CocktailList;

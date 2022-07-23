import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState(null);

  // explanation for line 12 to 13 here: https://bobbyhadz.com/blog/javascript-cannot-destructure-property-of-null
  const { name, category, info, image, glass, instructions, ingredients } =
    cocktail || {};

  useEffect(() => {
    fetchDrink();
  }, [id]);

  const fetchDrink = async () => {
    setLoading(true);
    const response = await fetch(`${BASE_URL}${id}`);
    const { drinks } = await response.json();

    if (drinks) {
      const {
        strDrink,
        strDrinkThumb,
        strAlcoholic,
        strCategory,
        strGlass,
        strInstructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = drinks[0];
      
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {
        name: strDrink,
        image: strDrinkThumb,
        info: strAlcoholic,
        category: strCategory,
        glass: strGlass,
        instructions: strInstructions,
        ingredients,
      };
      console.log(newCocktail)
      setCocktail(newCocktail);
    } else {
      setCocktail(null);
    }

    setLoading(false);
  };

  if (loading) return <Loading />;

  if (!cocktail)
    return <h2 className="section-title">no cocktail to display</h2>;

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name}></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {name}
          </p>
          <p>
            <span className="drink-data">category :</span> {category}
          </p>
          <p>
            <span className="drink-data">info :</span> {info}
          </p>
          <p>
            <span className="drink-data">glass :</span> {glass}
          </p>
          <p>
            <span className="drink-data">instructions :</span> {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}> {item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;

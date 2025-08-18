import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Recipe.css";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data.meals[0]));
  }, [id]);

  if (!recipe) return <h2>Loading...</h2>;

  return (
    <div className="recipe-details">
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />

      <h3>Instructions</h3>
      <p>{recipe.strInstructions}</p>

      <h3>Ingredients</h3>
      <ul>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
          const ingredient = recipe[`strIngredient${i}`];
          const measure = recipe[`strMeasure${i}`];
          return (
            ingredient &&
            ingredient.trim() !== "" && (
              <li key={i}>
                {ingredient} - {measure}
              </li>
            )
          );
        })}
      </ul>

      <Link to="/">
        <button>Back to Recipes</button>
      </Link>
    </div>
  );
};

export default RecipeDetails;

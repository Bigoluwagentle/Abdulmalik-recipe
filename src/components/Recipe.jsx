import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Recipe.css";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian")
      .then((res) => res.json())
      .then((data) => setRecipes(data.meals));
  }, []);

  return (
    <div id="recipe">
      <div id="wrapper">
        <h2>Explore our simple, healthy recipes</h2>
        <p>Discover eight quick, whole-food recipe that you cook tonight no proceessed junk, no guesswork</p>
      </div>
      
      <div className="recipe">
        {recipes.map((meal) => (
          <div key={meal.idMeal} className="wrapper">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h2>{meal.strMeal}</h2>
            {/* Navigate to /recipe/:id */}
            <Link to={`/recipe/${meal.idMeal}`}>
              <button>View Recipe</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipe;

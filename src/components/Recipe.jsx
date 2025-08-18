import React, { useEffect, useState } from "react";
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
        <p>Discover eight quick, whole-food dishes that fit real-life schedule and taste amazing. Use the search bar to find a recipe by name or ingrdients, or simply scroll the list and let something delicious catch your eye.</p>
      </div>
      <article>
        <nav>
          <p>Max Prep Time<i class="fa-solid fa-arrow-down"></i></p>
          <p>Mx Cook Time<i class="fa-solid fa-arrow-down"></i></p>
        </nav>
        <nav>
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="search" placeholder="Search by name or ingredients" />
        </nav>
      </article>
      <div className="recipe">
        {recipes.map((meal) => (
          <div key={meal.idMeal} className="wrapper">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
            <h2>{meal.strMeal}</h2>
            <button>
              View Recipe
            </button>
          </div>
        ))}
    </div>
    
    </div>
    
  );
};

export default Recipe;
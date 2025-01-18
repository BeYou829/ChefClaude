import React from "react";

export default function IngredientsList({ ingredients, getRecipe }) {
  const ingredientsList = ingredients.map(
    (ingredient: string, index: number) => <li key={index}>{ingredient}</li>
  );
  return (
    <section className="ingredients-section">
      <h1>Ingredients on hand: </h1>
      <ul>{ingredientsList}</ul>
      {ingredients.length > 3 && (
        <div className="generate-container">
          <div className="info-container">
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients</p>
          </div>
          <div className="button-container">
            <button onClick={getRecipe}>Get a recipe</button>
          </div>
        </div>
      )}
    </section>
  );
}

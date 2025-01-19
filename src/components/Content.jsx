import { useState } from "react";
import "../styles/Content.css";
import ClaudeRecipe from "./ClaudeRecipe.tsx";
import IngredientsList from "./IngredientsList.tsx";
import { getRecipeFromChefClaude } from "../Ai.js";

export default function Content() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  async function getRecipe() {
    const responseRecipe = await getRecipeFromChefClaude(ingredients);
    setRecipe(responseRecipe);
  }
  return (
    <main>
      <section className="form-section">
        <form action={addIngredient}>
          <input
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add Ingredient"
            name="ingredient"
          />
          <button type="submit">+ Add Ingredient</button>
        </form>
      </section>
      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}

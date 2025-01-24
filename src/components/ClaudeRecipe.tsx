import Markdown from "react-markdown";
import "../styles/ClaudeRecipe.css";
import React from "react";

type Props = {
  recipe: string;
};
export default function ClaudeRecipe(props: Props) {
  const recipeMarkdown = props.recipe;
  return (
    <section className="recipe-content" aria-live="polite">
      <hr />
      <Markdown>{recipeMarkdown}</Markdown>
    </section>
  );
}

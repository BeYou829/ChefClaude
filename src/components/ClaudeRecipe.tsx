import Markdown from "react-markdown";
import "../styles/ClaudeRecipe.css";
import React from "react";

type Props = {
  recipe: string;
};
export default function ClaudeRecipe(props: Props) {
  const recipeMarkdown = props.recipe;
  return <Markdown className="recipe-content">{recipeMarkdown}</Markdown>;
}

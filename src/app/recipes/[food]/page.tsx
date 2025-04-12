import React from 'react'
import styles from "./recipeItemPage.module.css";
import { getRecipe, getRecipes } from '@/lib/data/recipeData';
import { URLEncoding } from '@/lib/data/const';
import { Anime } from '@/lib/class/Anime';

export function generateStaticParams() {
  const recipes = getRecipes();

  return recipes.map((recipe) => ({
    food: recipe.name,
  }));
}

const RecipeItemPage = ({ params }: any) => {

  let { food } = params;

  food = food.replaceAll('%20', ' ');

  const recipe = getRecipe(food);

  return (
    <div>
      <h1>{recipe?.name}</h1>

      <ul>
        {recipe?.ingredients.map((ingredients: string, index: number) => (
          <li key={`ingredient${index}`}>{ingredients}</li>
        ))}
      </ul>

      <ol>
        {recipe?.steps.map((step: string, index: number) => (
          <li key={`step${index}`}>{step}</li>
        ))}
      </ol>
    </div>
  )
}

export default RecipeItemPage
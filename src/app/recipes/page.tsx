import React from 'react'
import styles from "./recipes.module.css";
import { getRecipes } from '@/lib/data/recipeData';
import RecipeSection from '@/components/recipeSection/recipeSection';

const RecipesPage = () => {
  const recipes = getRecipes();

  return (
    <div className={styles.container}>
      <RecipeSection recipes={recipes}/>
    </div>
  )
}

export default RecipesPage
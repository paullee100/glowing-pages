import { Recipe } from '@/lib/class/Recipe'
import React from 'react'
import RecipeCard from './recipeCard/recipeCard';
import styles from "./recipeSection.module.css";

interface Props {
    recipes: Recipe[];
}

const RecipeSection = ({ recipes }: Props) => {
  return (
    <div className={styles.container}>
        {recipes.map((recipe) => (
            <div className={styles.post} key={recipe.name}>
                <RecipeCard recipe={recipe}/>
            </div>
        ))}
    </div>
  )
}

export default RecipeSection
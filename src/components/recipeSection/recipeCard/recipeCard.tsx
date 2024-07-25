import React from 'react'
import styles from "./recipeCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { Recipe } from '@/lib/class/Recipe';

interface Props {
    recipe: Recipe;
}

const RecipeCard = ({ recipe }: Props) => {

  return (
    <div>
        <div className={styles.top}>
          <div className={styles.imgContainer}>
            <Image 
              src={recipe.image || "/glowing-pages/noavatar.png"}
              alt=""
              fill
              sizes="100%" 
              className={styles.card} />
          </div>

          <div className={styles.bottom}>
            <div className={styles.title}>{recipe.name}</div>
            <Link href={`recipes/${recipe.name}`} className={styles.detail}>READ</Link>
          </div>
        </div>
    </div>
  )
}

export default RecipeCard
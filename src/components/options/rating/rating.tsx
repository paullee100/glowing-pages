import { getRatings } from '@/lib/data/animeData';
import styles from "./rating.module.css";
import React, { forwardRef } from 'react'

const RatingSearch = forwardRef<HTMLDivElement>((props, ref) => {
  const ratings = getRatings();

  return (
    <div className={styles.container}>
        <label><h1>Ratings</h1></label>
        <div className={styles.rating_container} ref={ref}>
            {ratings.map((rating) => (
                <div key={rating}>
                    <input id={rating} type="checkbox" value={rating} />
                    <label htmlFor={rating}>{rating}</label>
                </div>
            ))}
        </div>
    </div>
  )
});

RatingSearch.displayName = 'RatingSearch';

export default RatingSearch
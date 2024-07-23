import React, { forwardRef } from 'react'
import styles from "./genres.module.css";
import { getGenres } from '@/lib/data/animeData';

const GenresSearch = forwardRef<HTMLDivElement>((props, ref) => {
    const genres = getGenres();
    
    return (
    <div className={styles.container}>
        <label><h1>Genres</h1></label>
        <div className={styles.genre_container} ref={ref}>
            {genres.map((genre) => (
                <div key={genre}>
                    <input id={genre} type="checkbox" name="genre" value={genre}/>
                    <label htmlFor={genre}>{genre}</label>
                </div>
            ))}
        </div>
    </div>
  )
});

GenresSearch.displayName = 'GenresSearch';

export default GenresSearch
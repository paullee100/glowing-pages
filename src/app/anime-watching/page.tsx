import React from 'react'
import styles from './animewatching.module.css';
import { currently_watching } from '@/lib/data/CurrentlyWatchingAnime';
import AnimeCard from '@/components/animeSection/animeCard/animeCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Anime Watch List"
}

const AnimeWatchingPage = () => {
  const animes = currently_watching;

  return (
    <div className={styles.container}>
        {animes.map((anime) => (
            <div className={styles.post} key={anime.engTitle}>
                <AnimeCard anime={anime} title={anime.engTitle} show={false}/>
            </div>
        ))}
    </div>
  )
}

export default AnimeWatchingPage
"use client"

import React, { useEffect, useState } from 'react'
import styles from './animewatching.module.css';
import AnimeCard from '@/components/animeSection/animeCard/animeCard';
import { Metadata } from 'next';
import { Anime } from '@/lib/class/Anime';

// export const metadata: Metadata = {
//   title: "Anime Watch List"
// }

const AnimeWatchingPage = () => {

  const [animes, setAnimes] = useState<Anime[]>([])

  useEffect(() => {
    fetch('/glowing-pages/api/anime/watching', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => setAnimes(data))
    .catch(err => console.error(err))

  }, [])

  const a = () => {
    fetch('/glowing-pages/api/anime/watching', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
  }

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
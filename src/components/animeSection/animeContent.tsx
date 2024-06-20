import React from 'react'
import styles from "./animeContent.module.css"
import { Anime } from '@/lib/Anime'
import { alphabets } from '@/lib/const'
import Link from 'next/link'
import AnimeSection from './animeSection'

interface Prop {
    animes: Anime[][];
    state: boolean;
}

const AnimeContent = ( { animes, state }: Prop) => {
  return (
    <div>
        {animes?.length === 26 ? (
          <div className={styles.navigateToLetter}>
            {alphabets.map((alphabet) => (
              <Link
                href={`#${alphabet}`}
                className={styles.alphabetLink}
                key={alphabet}
                scroll={true}>
                {alphabet}
              </Link>
            ))}
          </div>
        ) : (
          <div></div>
        )}

        {animes[0].length > 0 ? animes?.map((letter, index) => (
          <div key={index}>
            {animes?.length === 26 ? (
              <h1
                id={String.fromCharCode(65 + index)}
                className={styles.section}>
                {String.fromCharCode(65 + index)}
              </h1>
            ) : (
              <div className={styles.spacing}></div>
            )}
            <input id={`ch${index}`} className={styles.ch} type="checkbox" />
            <div className={styles.content}>
              <AnimeSection letter={letter} language={state} />
              <label htmlFor={`ch${index}`}>Show Less...</label>
            </div>
            <div className={styles.revealMore}>
              <label htmlFor={`ch${index}`}>Show More...</label>
            </div>
          </div>
        )) : <div className={styles.error}>No animes found...</div>}
      </div>
  )
}

export default AnimeContent
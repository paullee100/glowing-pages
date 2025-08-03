'use client'

import { Anime } from '@/lib/class/Anime';
import React, { useEffect, useRef, useState } from 'react'
import AnimeContent from './animeContent';
import styles from './animePage.module.css'
import AnimeSection from './animeSection';

const AnimePage = () => {

  const [animes, setAnimes] = useState<Anime[]>([])
  const [genres, setGenres] = useState<string[]>([]);
  const [themes, setThemes] = useState<string[]>([]);
  const [ratings, setRatings] = useState<string[]>([]);

  useEffect(() => {
    fetch('/glowing-pages/api/anime/watched', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      setAnimes(data)
      const genreList = data.flatMap((item: Anime) => item.genres)
      const themeList = data.flatMap((item: Anime) => item.themes)
      const ratingList = data.flatMap((item: Anime) => item.rating)
      setGenres(Array.from(new Set(genreList)))
      setThemes(Array.from(new Set(themeList)))
      setRatings(Array.from(new Set(ratingList)))
    })
    .catch(err => console.error(err))
  }, [])

  const [displayAnimes, updateAnimes] = useState<Anime[]>(animes);

  const firstLetterOfAnimeEngTitle = (_: React.MouseEvent<HTMLDivElement, MouseEvent> | React.ChangeEvent<HTMLSelectElement>, letter: string) => {

    console.log(letter)
    const filteredAnimes = animes.filter(anime => {
      const engName = anime.engTitle.toUpperCase()
      return engName[0] === letter
    })

    updateAnimes(filteredAnimes)
    console.log(filteredAnimes)

  }

  const filters = (_: React.ChangeEvent<HTMLSelectElement>, value: any) => {
    console.log(value)
  }

  return (
    <div className={styles.container}>

        <div className={styles.genre}>
          <label htmlFor="genreDropdown">Genre</label>
          <select id="genreDropdown" name="genreDropdown" onChange={event => filters(event, event.target.value)}>
            <option value={"ANY"}>ANY</option>
            {genres.map(genre => (
              <option value={genre} key={genre}>{genre}</option>
            ))}
          </select>
        </div>

        <div className={styles.genre}>
          <label htmlFor="themeDropdown">Theme</label>
          <select id="themeDropdown" name="themeDropdown" onChange={event => filters(event, event.target.value)}>
            <option value={"ANY"}>ANY</option>
            {themes.map(theme => (
              <option value={theme} key={theme}>{theme}</option>
            ))}
          </select>
        </div>

        <div className={styles.genre}>
          <label htmlFor="ratingDropdown">Rating</label>
          <select id="ratingDropdown" name="ratingDropdown" onChange={event => filters(event, event.target.value)}>
            <option value={"ANY"}>ANY</option>
            {ratings.map(rating => (
              <option value={rating} key={rating}>{rating}</option>
            ))}
          </select>
        </div>

        <div className={styles.mobile}>
          <label htmlFor="alphabetDropdown">
            <select name="alphabetDropdown" id="alphabetDropdown" onChange={event => firstLetterOfAnimeEngTitle(event, event.target.value)}>
              {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
                <option value={letter} key={`mobile${letter}`}>{letter}</option>
              ))}
            </select>
          </label>
        </div>

        <div className={styles.computer}>
          {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
            <div key={`comp${letter}`} onClick={event => firstLetterOfAnimeEngTitle(event, letter)}>{letter}</div>
          ))}
        </div>

        {/* <div className={styles.translationContainer}>
            <span>English</span>
            <label className={styles.switch}>
            <input type="checkbox" className={styles.input} onClick={() => changeState((state) => !state)}/>
            <span className={styles.slider}></span>
            </label>
            <span>Japanese</span>
        </div> */}

        {/* <GenresSearch ref={genreRef} />
        <ThemeSearch ref={themeRef} />
        <RatingSearch ref={ratingRef} /> */}
        {/* <DurationSearch /> */}

        <div>
          <AnimeSection letter={displayAnimes} language={true}/>
        </div>

        

        <div className={styles.center}>
            <button disabled={true}>Clear Filter</button>
            {/* <button className={styles.searchButton} onClick={searchFilter}>Search</button> */}
        </div>

    </div>
  )
}

export default AnimePage
"use client";

import React, { useState, useRef, useEffect } from "react";
import { getAnimes, getJapaneseTitle } from "@/lib/data";
import AnimeSection from "@/components/animeSection/animeSection";
import styles from "./animeWatched.module.css";
import Link from "next/link";
import { alphabets } from "@/lib/const";
import GenresSearch from "@/components/options/genres/genres";
import ThemeSearch from "@/components/options/theme/theme";
import { Anime } from "@/lib/Anime";
import DurationSearch from "@/components/options/duration/duration";

const AnimeWatchedPage = () => {
  const [animes, updateAnimes] = useState<Anime[][]>(getAnimes());
  const [state, changeState] = useState(true);
  const [genres, updateGenres] = useState<string[]>([]);
  const [themes, updateThemes] = useState<string[]>([]);

  const genreRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!state) {
      updateAnimes(getJapaneseTitle());
    } else {
      updateAnimes(getAnimes());
    }
    updateAnimes(getAnimes(genres, themes))
    // console.log(animes)
  }, [state, genres, themes]);

  const searchFilter = () => {

    const genreFilter: string[] = [];
    const themeFilter = [];

    for (let i = 0; i < genreRef.current?.children.length!; i++) {
      const getCheckBox = genreRef.current?.children[i].firstElementChild as HTMLInputElement
      if (getCheckBox.checked) {
        console.log(genreRef.current?.children[i].textContent!);
        genreFilter.push(genreRef.current?.children[i].textContent!);
        // updateGenres((genres) => [...genres, genreRef.current?.children[i].textContent!]);
      }
    }

    for (let i = 0; i < themeRef.current?.children.length!; i++) {
      const getCheckBox = themeRef.current?.children[i].firstElementChild as HTMLInputElement
      if (getCheckBox.checked) {
        themeFilter.push(themeRef.current?.children[i].textContent!);
        // updateThemes([...themes, themeRef.current?.children[i].textContent!]);
      }
    }

    updateGenres(genreFilter);
    updateThemes(themeFilter);
  };

  return (
    <div>

      <div className={styles.translationContainer}>
        <span>English</span>
        <label className={styles.switch}>
          <input type="checkbox" className={styles.input} onClick={() => changeState((state) => !state)}/>
          <span className={styles.slider}></span>
        </label>
        <span>Japanese</span>
      </div>

      <GenresSearch ref={genreRef} />
      <ThemeSearch ref={themeRef} />
      <DurationSearch />

      <div className={styles.center}>
        <button className={styles.searchButton} onClick={searchFilter}>Search</button>
      </div>

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
            <div>
              <AnimeSection letter={letter} language={state} />
            </div>
          </div>
        )) : <div className={styles.error}>No animes found...</div>}
      </div>
    </div>
  );
};

export default AnimeWatchedPage;

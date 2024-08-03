"use client";

import React, { useState, useRef, useEffect } from "react";
import { getAnimes, getJapaneseTitle } from "@/lib/data/animeData";
import styles from "./animeWatched.module.css";
import GenresSearch from "@/components/options/genres/genres";
import ThemeSearch from "@/components/options/theme/theme";
import { Anime } from "@/lib/class/Anime";
import DurationSearch from "@/components/options/duration/duration";
import AnimeContent from "@/components/animeSection/animeContent";
import RatingSearch from "@/components/options/rating/rating";

const getFilteredData = (typeRef: React.RefObject<HTMLDivElement>, typeArray: string[]) => {
  for (let i = 0; i < typeRef.current?.children.length!; i++) {
    const getCheckBox = typeRef.current?.children[i].firstElementChild as HTMLInputElement
    if (getCheckBox.checked) {
      typeArray.push(typeRef.current?.children[i].textContent!);
    }
  }
}

const AnimeWatchedPage = () => {
  const [animes, updateAnimes] = useState<Anime[][]>(getAnimes([], [], []));
  const [state, changeState] = useState(true);
  const [genres, updateGenres] = useState<string[]>([]);
  const [themes, updateThemes] = useState<string[]>([]);
  const [ratings, updateRatings] = useState<string[]>([]);

  const genreRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);
  const ratingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!state) {
      updateAnimes(getJapaneseTitle(genres, themes, ratings));
    } else {
      updateAnimes(getAnimes(genres, themes, ratings));
    }
  }, [state, genres, themes, ratings]);

  const searchFilter = () => {

    const genreFilter: string[] = [];
    const themeFilter: string[] = [];
    const ratingFilter: string[] = [];

    getFilteredData(genreRef, genreFilter)
    getFilteredData(themeRef, themeFilter)
    getFilteredData(ratingRef, ratingFilter)

    updateGenres(genreFilter);
    updateThemes(themeFilter);
    updateRatings(ratingFilter);
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
      <RatingSearch ref={ratingRef} />
      {/* <DurationSearch /> */}

      <div className={styles.center}>
        <button disabled={true}>Clear Filter</button>
        <button className={styles.searchButton} onClick={searchFilter}>Search</button>
      </div>

      <AnimeContent animes={animes} state={state} />
    </div>
  );
};

export default AnimeWatchedPage;

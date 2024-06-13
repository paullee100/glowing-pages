"use client";

import React, { useState } from "react";
import { getAnimes } from "@/lib/data";
import AnimeSection from "@/components/animeSection/animeSection";
import styles from "./animeWatched.module.css";
import Link from "next/link";
import { alphabets } from "@/lib/const";
import { Anime } from "@/lib/Anime";

const AnimeWatchedPage = () => {
  let animes;

  const [state, changeState] = useState(true);

  if (!state) {
    const flatten: Anime[] = getAnimes().flat();
    const sortedAnime = new Array(26);

    for (let i = 0; i < sortedAnime.length; i++) {
      sortedAnime[i] = [];
    }

    const lowerCaseA = "a".charCodeAt(0);
    const upperCaseA = "A".charCodeAt(0);
    for (let i = 0; i < flatten.length; i++) {
      flatten[i].japTitle = flatten[i].japTitle === "" ? flatten[i].engTitle : flatten[i].japTitle;
      const firstCharASCII = flatten[i].japTitle.charCodeAt(0);

      const index =
        firstCharASCII - lowerCaseA > 0
          ? firstCharASCII - lowerCaseA
          : firstCharASCII - upperCaseA;
      sortedAnime[index].push(flatten[i]);
    }

    animes = sortedAnime;
  } else {
    animes = getAnimes();
  }

  return (
    <div>
      <button className={styles.languageButton} onClick={() => changeState((state) => !state)}>
        Change Language
      </button>
      <div className={styles.navigateToLetter}>
        {alphabets.map((alphabet) => (
          <Link href={`#${alphabet}`} className={styles.alphabetLink} key={alphabet}>
            {alphabet}
          </Link>
        ))}
      </div>
      {animes.map((letter, index) => (
        <div key={index}>
          <h1 id={String.fromCharCode(65 + index)} className={styles.section}>
            {String.fromCharCode(65 + index)}
          </h1>
          <div>
            <AnimeSection letter={letter} language={state} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimeWatchedPage;

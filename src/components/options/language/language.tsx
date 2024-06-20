import { Anime } from '@/lib/Anime';
import { getAnimes } from '@/lib/data';
import React, { useState } from 'react'
import styles from "./language.module.css";

const Language = () => {
  let animes;

  const [state, changeState] = useState(true);

  if (!state) {
    const flatten: Anime[] = getAnimes([], []).flat();
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
    animes = getAnimes([], []);
  }

  return (
    <div>
      <label className={styles.switch}>
        <input type="checkbox" className={styles.input} />
        <span className={styles.slider}></span>
      </label>
    </div>
  )
}

export default Language
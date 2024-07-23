import React from "react";
import Image from "next/image";
import AnimeCard from "./animeCard/animeCard";
import styles from "./animeSection.module.css";
import { Anime } from "@/lib/class/Anime";

interface Props {
  letter: Anime[];
  language: boolean;
}

const AnimeSection = ({ letter, language }: Props) => {
  return (
    <div className={styles.container}>
      {letter.map((anime) => (
        <div className={styles.post} key={anime.engTitle}>
          <AnimeCard
            anime={anime}
            title={language ? anime.engTitle : anime.japTitle}
            show={true}
          />
        </div>
      ))}
    </div>
  );
};

export default AnimeSection;

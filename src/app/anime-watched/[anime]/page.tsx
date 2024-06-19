import { getAnime, getAnimes } from "@/lib/data";
import React from "react";
import Image from "next/image";
import { URLEncoding } from "@/lib/const";
import styles from "./animepage.module.css";
import { Anime } from "@/lib/Anime";

export function generateStaticParams() {
  const animes: Anime[] = getAnimes().flat();

  return animes.map((title) => ({
    anime: title.engTitle,
  }));
}

const AnimePage = ({ params }: any) => {
  let { anime } = params;

  for (const url in URLEncoding) {
    anime = anime.replaceAll(url, URLEncoding[url as keyof Object]);
  }

  const data = getAnime(anime);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={data?.img || "/noAvatar.png"}
            alt=""
            width={400}
            height={500}
          />
        </div>
        <div>{data?.engTitle}</div>
        <div>{data?.japTitle}</div>
        <div>{data?.episodes}</div>
        <div>{data?.rating}</div>
        <div>{data?.type}</div>
        <div>{data?.aired}</div>
        <div>{data?.premiered}</div>
        <div>{data?.studios}</div>
        <div>{data?.source}</div>
        <div>{data?.genres.join('|')}</div>
        <div>{data?.themes.join('|')}</div>
        <div>{data?.duration}</div>
      </div>
      <div className={styles.right}>
        <div>{data?.description}</div>
      </div>
      {/* <div>{data?.watchshow}</div> */}
    </div>
  );
};

export default AnimePage;

import React from 'react'
import Image from "next/image";
import styles from "./animeCard.module.css";
import Link from 'next/link';
import { Anime } from '@/lib/Anime';

interface Props {
    anime: Anime;
    title: string;
    show: boolean;
}

const AnimeCard = ( { anime, title, show } : Props) => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>

            <div className={styles.imgContainer}>
                <Image
                src={anime.img || "/noAvatar.png"}
                alt=""
                fill
                sizes="100%"
                className={styles.card} />
            </div>
        </div>

        <div className={`${styles.bottom}`}>
            <div key={title} className={styles.title}>{title}</div>
            {show && <Link href={`anime-watched/${anime.engTitle}`} className={styles.detail}>READ MORE</Link>}
        </div>
    </div>
  )
}

export default AnimeCard
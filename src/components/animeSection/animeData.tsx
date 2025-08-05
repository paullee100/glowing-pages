"use client"

import React, { useEffect, useState } from 'react'
import Image from "next/image"
import styles from './animeData.module.css'
import { Anime } from '@/lib/class/Anime'

interface Props {
    anime: string
}

const AnimeData = ({ anime }: Props) => {

    const [animeData, setAnimeData] = useState<Anime>()

    const searchParams = new URLSearchParams()
    searchParams.append('animeName', anime)

    useEffect(() => {
        fetch(`/glowing-pages/api/anime/data?${searchParams.toString()}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => setAnimeData(data))
        .catch(err => console.error(err))
    }, [searchParams])

    const data = animeData

    return (
        <div>
            <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
            <Image
                src={data?.img || "/glowing-pages/noavatar.png"}
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
            <br />
            <span>Data from MyAnimeList.net</span>
        </div>
        </div>
    )
}

export default AnimeData
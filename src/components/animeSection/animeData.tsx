"use client"

import React, { useEffect, useMemo, useState } from 'react'
import Image from "next/image"
import styles from './animeData.module.css'
import { Anime } from '@/lib/class/Anime'
import { useSearchParams } from 'next/navigation'

interface Props {
    anime: string
}

const AnimeData = ({ anime }: Props) => {

    const [animeData, setAnimeData] = useState<Anime>()

    const searchParams = useSearchParams()

    const currentParams = useMemo(() => {
        return new URLSearchParams(searchParams.toString())
    }, [searchParams])

    useEffect(() => {
        if (!currentParams.has('animeName')) {
            currentParams.append('animeName', anime)
            
            fetch(`/glowing-pages/api/anime/data?${currentParams.toString()}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(data => setAnimeData(data))
            .catch(err => console.error(err))
        }
        
    }, [currentParams, anime])

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
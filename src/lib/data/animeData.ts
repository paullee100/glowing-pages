import { Anime } from "../class/Anime"

let ANIMES: Anime[]

export const updateANIMES = (animeList: Anime[]) => {
    ANIMES = animeList
}

export const getANIMES = (): Anime[] => {
    if (!ANIMES) {
        return []
    }

    return ANIMES
}
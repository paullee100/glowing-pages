import { NextResponse } from "next/server"
import { getAllAnimes } from "../../../../lib/data/animeData"
import { Anime, getDatabase } from "../../../../lib/models"
import { connectToDb } from "../../../../lib/utils"


export const POST = async (request: any) => {

    try {
        connectToDb()
        
        const allAnimes = getAllAnimes()
        
        // Manually go over each alphabet
        
        for (const list of allAnimes) {
            for (const anime of list) {
                const newAnime = {
                            japTitle: anime.japTitle,
                            engTitle: anime.engTitle,
                            img: anime.img,
                            episodes: anime.episodes,
                            rating: anime.rating,
                            description: anime.description,
                            typeOfShow: anime.type,
                            aired: anime.aired,
                            premiered: anime.premiered,
                            studios: anime.studios,
                            source: anime.source,
                            genres: anime.genres,
                            themes: anime.themes,
                            duration: anime.duration
                }

                const dupe = await Anime.findOne({ engTitle: newAnime.engTitle })

                if (dupe) {
                    continue // skip
                }
        
                await Anime.create(newAnime)

            }

        }

        return new NextResponse("Successful", {
            status: 200
        })
    } catch (error) {
        console.error("error", error)
        return new NextResponse("An error has occurred", {
            status: 500
        })
    }
}

export const GET = async (request: any) => {

    try {
        connectToDb()
    
        const animeList = await getDatabase("watchinganimes")?.collection("lists").find({ }).toArray()

        if (!animeList) {
            throw new Error("Error getting list")
        }

        return NextResponse.json(animeList)

    } catch (error) {
        console.error("error:", error)
        return new NextResponse("An error has occurred", {
            status: 500
        })
    }
    
}
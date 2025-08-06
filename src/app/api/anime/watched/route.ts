import { WatchedAnime } from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic';

// export const POST = async (request: any) => {

//     try {
//         connectToDb()

//         const animeList: any = await getDatabase("watchedanimes")?.collection("animes").find({ }).toArray()

//         for (const anime of animeList) {
//             const newAnime = {
//                             japTitle: anime.japTitle,
//                             engTitle: anime.engTitle,
//                             img: anime.img,
//                             episodes: anime.episodes,
//                             rating: anime.rating,
//                             description: anime.description,
//                             typeOfShow: anime.typeOfShow,
//                             aired: anime.aired,
//                             premiered: anime.premiered,
//                             studios: anime.studios,
//                             source: anime.source,
//                             genres: anime.genres,
//                             themes: anime.themes,
//                             duration: anime.duration

//                         }
//                         const dupe = await WatchedAnime.findOne({ engTitle: newAnime.engTitle })
            
//                         if (dupe) {
//                             continue // skip
//                         }

//                         await WatchedAnime.create(newAnime)
//                     }

//         return new NextResponse("Success", {
//             status: 200
//         })
//     } catch (err) {
//         console.error("error", err)
//         return new NextResponse("An error has occurred", {
//             status: 500
//         })
//     }

    
// }

export const GET = async (request: any) => {

    try {
        await connectToDb()

        const animeList = await WatchedAnime.find({ })

        if (!animeList) {
            throw new Error("Error getting animes")
        }

        return NextResponse.json(animeList)
    } catch (error) {
        console.error("error:", error)
        return new NextResponse("An error has occurred", {
            status: 500
        })
    }
}
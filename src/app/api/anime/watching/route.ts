import { NextResponse } from "next/server"
import { WatchingAnime } from "../../../../lib/models"
import { connectToDb } from "../../../../lib/utils"


// export const POST = async (request: any) => {

//     try {
//         connectToDb()
        
//         const animeList: any = await getDatabase("watchinganimes")?.collection("lists").find({ }).toArray()
        
//         if (!animeList) {
//             return new NextResponse("error", {
//                 status: 500
//             })
//         }
//         // Manually go over each alphabet
//             for (const anime of animeList) {
//                 const newAnime = {
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
//                 }

//                 const dupe = await WatchingAnime.findOne({ engTitle: newAnime.engTitle })

//                 if (dupe) {
//                     continue // skip
//                 }
        
//                 await WatchingAnime.create(newAnime)

//             }


//         return new NextResponse("Successful", {
//             status: 200
//         })
//     } catch (error) {
//         console.error("error", error)
//         return new NextResponse("An error has occurred", {
//             status: 500
//         })
//     }
// }

export const GET = async (request: any) => {

    try {
        connectToDb()
    
        const animeList = await WatchingAnime.find({ })

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
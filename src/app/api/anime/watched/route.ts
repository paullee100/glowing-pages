import { getDatabase } from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic';

export const GET = async (request: any) => {

    try {
        connectToDb()

        const animeList = await getDatabase("watchedanimes")?.collection("animes").find({ }).toArray()

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
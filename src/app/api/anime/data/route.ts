import { getDatabase } from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"

export const GET = async (req: Request, _: Response) => {

    const { searchParams } = new URL(req.url)
    const animeName = searchParams.get('animeName')

    try {
        connectToDb()

        const anime = await getDatabase("watchedanimes")?.collection("animes").findOne({ engTitle: animeName })

        if (!anime) {
            throw new Error("Error getting animes data")
        }

        return NextResponse.json(anime)
    } catch (error) {
        console.error("error:", error)
        return new NextResponse("An error has occurred", {
            status: 500
        })
    }
}
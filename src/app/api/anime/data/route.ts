import { WatchedAnime } from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic';

export const GET = async (req: Request, _: Response) => {

    const { searchParams } = new URL(req.url)
    const animeName = searchParams.get('animeName')

    try {
        await connectToDb()

        const anime = await WatchedAnime.find({ engTitle: animeName })

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
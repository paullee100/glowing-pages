import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"
import { User } from "@/lib/models"

export const POST = async(request: any) => {
    const {username, email, password} = await request.json()

    console.log(username, email, password)

    try {
        // Create a DB Connection
        connectToDb()

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = {
            username,
            email,
            password: hashedPassword
        }

        await User.create(newUser)

    } catch (error: any) {
        return new NextResponse(error.message, {
            status: 500,
        });
    }

    return new NextResponse("User has been created", {
        status: 201,
    });
}
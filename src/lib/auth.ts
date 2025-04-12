import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { authConfig } from "./auth.config"
import { connectToDb } from "./utils"
import { User } from "./models"
import bcrypt from "bcrypt"

const login = async(credentials: any) => {
    try {
        connectToDb()

        const user = await User.findOne({ username: credentials.username })

        if (!user) {
            throw new Error("Wrong credentials")
        }

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)

        if (!isPasswordCorrect) {
            throw new Error("Wrong credentials")
        }

        return user
    } catch (error) {
        console.log(error)
        throw new Error("Failed to login!")
    }
}

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    ...authConfig,
    providers: [
        GitHub,
        CredentialsProvider({
            async authorize(credentials: any) {
                try {
                    const user = await login(credentials)
                    return user

                } catch (error) {
                    return null
                }
            }
        })
    ],
    callbacks: {

    }
})
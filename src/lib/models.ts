import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 30,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
});

const animeSchema = new mongoose.Schema({
    japTitle: {
        type: String,
    },
    engTitle: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    episodes: {
        type: Number,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    typeOfShow: {
        type: String,
        required: true,
    },
    aired: {
        type: String,
        required: true,
    },
    premiered: {
        type: String,
        required: true,
    },
    studios: {
        type: String,
        required: true,
    },
    source: {
        type: String,
        required: true,
    },
    genres: {
        type: Array,
        required: true,
        default: [],
    },
    themes: {
        type: Array,
        required: true,
        default: [],
    },
    duration: {
        type: String,
        required: true,
    },
})

// const connect = mongoose.connection.useDb('watchinganimes')
const connect = mongoose.connection.useDb('watchedanimes')

export const User = mongoose.models?.User || mongoose.model("User", userSchema)
export const Anime = connect.models?.Anime || connect.model("Anime", animeSchema)

export const getDatabase = (dbName: string) => {

    try {
        
        return mongoose.connection.useDb(dbName)

    } catch (error) {
        console.error("Error:", error)
    }
}
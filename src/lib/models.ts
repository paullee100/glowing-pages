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

const animeWatchedSchema = new mongoose.Schema({
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

const animeWatchingSchema = new mongoose.Schema({
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


export const User = mongoose.models?.User || mongoose.model("User", userSchema)
export const WatchedAnime = mongoose.models?.WatchedAnime || mongoose.model("WatchedAnime", animeWatchedSchema)
export const WatchingAnime = mongoose.models?.WatchingAnime || mongoose.model("WatchingAnime", animeWatchingSchema)
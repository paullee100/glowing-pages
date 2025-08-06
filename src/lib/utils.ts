const { default: mongoose } = require("mongoose")

const connection = {
    isConnected: false,
};

export const connectToDb = async() => {
    try {
        if (connection.isConnected) {
            console.log("Using existing connection")
            return
        }

        const db = await mongoose.connect(process.env.MONGO, {
            serverSelectionTimeoutMS: 20000
        })

        connection.isConnected = db.connections[0].readyState
        console.log(connection.isConnected ? "Connected to Database" : "Not Connected to Database")
    } catch (error) {
        console.error("error:", error)
        throw new Error("Error connecting to database")
    }
}
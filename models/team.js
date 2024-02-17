const mongoose = require("mongoose")

const teamSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    captain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Person"
    },
    coach: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Person"
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Team", teamSchema)
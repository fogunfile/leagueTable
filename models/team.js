const mongoose = require("mongoose")

const teamSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    matchPlayed: {
        type: Number,
        default: 0,
    },
    win: {
        type: Number,
        default: 0,
    },
    draw: {
        type: Number,
        default: 0,
    },
    lose: {
        type: Number,
        default: 0,
    },
    goalsFor: {
        type: Number,
        default: 0,
    },
    goalsAgainst: {
        type: Number,
        default: 0,
    },
    goalDifference: {
        type: Number,
        default: 0,
    },
    points: {
        type: Number,
        default: 0,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Team", teamSchema)
const mongoose = require("mongoose");

const fixtureSchema = mongoose.Schema({
    homeTeam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team"
    },
    awayTeam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team"
    },
    info: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Fixture", fixtureSchema)
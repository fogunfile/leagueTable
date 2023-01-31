const       mongoose        =   require("mongoose");
const       db              =   require("./index");


const matchSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now()
    },

    team1Score: {
        type: String,
        required: "No score stated!"
    },

    team2Score: {
        type: String,
        required: "No score stated!"
    }
});

const Match = mongoose.model("Match", matchSchema);

module.exports = Match;


const       mongoose        =   require("mongoose");
const       db              =   require("./index");


const seasonSchema = new mongoose.Schema({
    name: {
        type: String,
    },

    season: {
        type: String,
    },

    start: {
        type: Date,
    },

    end: {
        type: Date,
    },
    
    date: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model("Season", seasonSchema);
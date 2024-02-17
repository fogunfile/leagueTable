import {Schema} from 'mongoose'

const personSchema = Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    nickname: {
        type: String,
    },
    email: {
        type: String
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team"
    },
    isUser: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model("Person", personSchema)
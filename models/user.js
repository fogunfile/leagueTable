import {Schema} from 'mongoose'

const userSchema = Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
})

module.exports = mongoose.model("User", userSchema)
require("dotenv").config();
const   mongoose    =   require("mongoose");
mongoose.set("debug", true);
// mongoose.set('useCreateIndex', true);
mongoose.set('strictQuery', false);


// Connect to mongodb
const connect = function () {
    const options = {useNewUrlParser: true, useUnifiedTopology: true };
    mongoose.connect(process.env.DB_team, options);
    // console.log("connected to db")
};
connect();


mongoose.Promise = Promise;

// module.exports.db = require("./team");
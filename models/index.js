const       mongoose    =   require("mongoose");

mongoose.set("debug", true);
mongoose.set("useCreateIndex", true);
mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected to mongodb");
});

mongoose.Promise = Promise;

module.exports.Match = require("./matches");

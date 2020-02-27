const       mongoose    =   require("mongoose");

mongoose.set("debug", true);
mongoose.set("useCreateIndex", true);
mongoose.set('useFindAndModify', false);

mongoose.connect("mongodb://localhost/league-table", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connecting to mongodb");
});

mongoose.Promise = Promise;

module.exports.Match = require("./matches");

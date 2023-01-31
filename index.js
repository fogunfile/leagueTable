const express   = require("express")
const app       = express()
const db        = require("./models")
const rootRoute = require("./routes/index")
const fixtureRoute = require("./routes/fixture")
const teamRoute = require("./routes/team")
const moment    = require("moment");
const resultRoute = require("./routes/result")
const methodOverride = require("method-override");


app.use(express.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/public`))
app.use(express.static(`${__dirname}/views`))
app.set("view engine", "ejs");

app.use(methodOverride('_method'))

app.use("/", rootRoute)
app.use("/fixture", fixtureRoute)
app.use("/result", resultRoute)
app.use("/team", teamRoute)

app.locals.moment = moment;

app.listen("3000", ()=>{
    console.log("Server started");
})
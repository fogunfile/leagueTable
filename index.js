const   express     =   require("express")
    ,   app         =   express()
    ,   matches     =   require("./routes")
    ;

app.set("view engine", "ejs")
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }))

app.use("/api/match", matches)

app.get("/", (req, res) => {
    res.render("index");
})



// Bring Data from Database
// Edit data in Database
// Add data to Database

const PORT = 3000;
const IP = "localhost";


app.listen(PORT, IP, () => {
    console.log("Hey you!");
})
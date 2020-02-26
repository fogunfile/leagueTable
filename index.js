const   express     =   require("express")
    ,   app         =   express()
    ;

app.set("view engine", "ejs")
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("index");
})

const PORT = 3000;
const IP = "localhost";


app.listen(PORT, IP, () => {
    console.log("Hey you!");
})
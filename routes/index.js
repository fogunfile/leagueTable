const       express             =       require("express")
    ,       matchRouter         =       express.Router()
    ,       db                  =       require("../models")


matchRouter.get("/", async (req, res) => {
    try {
        let foundMatches = await db.Match.find();
        console.log(foundMatches)
        console.log("foundMatches are here");
        res.json(foundMatches);
    } catch (err) {
        console.log(err);
    }
});

matchRouter.post("/", async (req, res) => {
    console.log(req.body);
    let data = {
        team1Score: req.body.team1Score,
        team2Score: req.body.team2Score
    }
    try {
        let newMatch = await db.Match.create(data);
        console.log(newMatch);
    } catch (err) {
        console.log(err);
    }
    res.json({ message: "Posted" });
})

matchRouter.get("/:thisMatchId", async (req, res) => {
    try {
        let foundMatch = await db.Match.findById({ _id: req.params.thisMatchId });
        res.json(foundMatch);
    } catch (err) {
        console.log(err);
    }
})

matchRouter.get("/:thisMatchId", async (req, res) => {
    try {
        let updateMatch = await db.Match.findOneAndUpdate({_id: req.params.thisMatchId}, req.body, {new: true});
        res.json(updateMatch);
    } catch (err) {
        console.log(err);
    }
})

matchRouter.delete("/:thisMatchId", async (req, res) => {
    try {
        let toDel = await db.Match.deleteOne({ _id: req.params.thisMatchId })
        console.log("it has been deleted!");

    } catch (err) {
        console.log(err);
    }
});


module.exports = matchRouter
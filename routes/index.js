const express = require("express");
const router = express.Router();
const Team = require("../models/team");

// const router = express.Router()

router.get("/", async (req, res)=> {
    const teams = await Team.find().sort({points: -1}).sort({goalDifference: -1}).sort({goalsFor: -1});
    res.render("index", {teams});
})

module.exports = router;

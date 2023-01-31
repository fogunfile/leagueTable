const mongoose      =   require("mongoose")
    ,   db          =   require("../models");


    module.exports = {
        getAllMatches: async (req, res) => {
            try {
                let foundMatches = await db.Match.find();
                console.log("foundMatches are here");
                res.json(foundMatches);
            } catch (err) {
                console.log(err);
            }
        },

        postOneMatch: async (req, res) => {
            console.log(req.body);
            let data = {
                team1Score: req.body.team1Score,
                team2Score: req.body.team2Score
            }
            try {
                let newMatch = await db.Match.create(data);
                res.json(newMatch);
            } catch (err) {
                console.log(err);
            }
        },

        getOneMatch: async (req, res) => {
            try {
                let foundMatch = await db.Match.findById({ _id: req.params.thisMatchId });
                res.json(foundMatch);
            } catch (err) {
                console.log(err);
            }
        },

        updateOneMatch: async (req, res) => {
            try {
                let updateMatch = await db.Match.findOneAndUpdate({ _id: req.params.thisMatchId }, req.body, { new: true });
                console.log(updateMatch);
                res.json(updateMatch);
            } catch (err) {
                console.log(err);
            }
        },

        deleteOneMatch: async (req, res) => {
            try {
                await db.Match.deleteOne({ _id: req.params.thisMatchId })
                console.log("it has been deleted!");

            } catch (err) {
                console.log(err);
            }
        }
    }
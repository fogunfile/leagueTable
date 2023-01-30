const Team = require("../models/team")
const Fixture = require("../models/fixture")
const Result = require("../models/result")

module.exports = {
    readResult: async (req, res) => {
        let resultId = req.params.id
        const chosenResult = await Result.findById({_id: resultId});
        res.send(chosenResult);
    },
    toCreateResult: (req, res) => {
        let fixtureId = req.params.id;
        res.send(`
            <!doctype html>
            <html>
                <head>
                    <title>Create Result</title>
                </head>
                <body>
                    <input type="text" name="homeTeam" data-fixture-id="${fixtureId}" />
                    <input type="text" name="awayTeam" data-fixture-id="${fixtureId}" />
                </body>
            </html>
        `)
    },
    createResult: async (req, res)=> {
        try {
            console.log(req.body);
            // await Result.create()
           
        } catch (e) {
            console.log(e)
        }
    },
    toUpdateResult: () => {
        try {
            
        } catch (e) {
            console.log(e);
        }
    },
    updateResult: async (req, res) => {
        try {
            const teamA = await Team.findOne({name: "Team A"});
            const teamB = await Team.findOne({name: "Team B"});
            const thisMatch = new RemoveMatch(3, teamA._id, 2, teamB._id);
            
            const executedMatch = await thisMatch.executeMatch()
            res.send(executedMatch);
        } catch (e) {
            console.log(e);
        }
    },
    deleteResult: () => {},
}
const Team = require("../models/team")
const Fixture = require("../models/fixture")

module.exports = {
    readFixture: async (req, res) => {
        const chosenFixture = await Fixture.findById({_id: req.params.id});
        res.send(chosenFixture);
    },
    toCreateFixture: (req, res) => {
        res.send(`
            <!doctype html>
            <html>
                <head>
                    <title>Create Fixture</title>
                </head>
                <body>
                    <input type="text" name="homeTeam" />
                    <input type="text" name="awayTeam" />
                </body>
            </html>
        `)
    },
    createFixture: async (req, res)=> {
        try {
           
        } catch (e) {
            console.log(e)
        }
    },
    toUpdateFixture: () => {
        try {
            
        } catch (e) {
            console.log(e);
        }
    },
    updateFixture: async (req, res) => {
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
    deleteFixture: () => {},
}
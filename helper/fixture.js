const Team = require("../models/team")
const Fixture = require("../models/fixture")
const Result = require("../models/result")
const RemoveMatch = require("../utils/removeMatch")

module.exports = {
    readFixtures: async (req, res) => {
        const fixtures = await Fixture.find().sort({date: -1}).populate("homeTeam awayTeam");
        res.render("fixture/", {fixtures});
    },
    readOneFixture: async (req, res) => {
        const fixture = await Fixture.findById({_id: req.params.id}).populate("homeTeam awayTeam");
        res.render("fixture/id", {fixture});
    },
    toCreateFixture: async (req, res) => {
        const teams = await Team.find().sort({name: 1});
        res.render("fixture/new", {teams});
    },
    createFixture: async (req, res)=> {
        try {
           console.log(req.body)
           const newFixture = await Fixture.create(req.body);
           res.redirect(`fixture/${newFixture._id}`);
        } catch (e) {
            console.log(e)
        }
    },
    toUpdateFixture: async (req, res) => {
        const teams = await Team.find().sort({name: 1});
        const fixture = await Fixture.findById({_id: req.params.id}).populate("homeTeam awayTeam");
        res.render("fixture/edit", {fixture, teams});
    },
    updateFixture: async (req, res) => {
        try {
            const fixtureId = req.params.id
            console.log(req.body)
            await Fixture.findByIdAndUpdate({_id: fixtureId}, req.body, {new: true});
            res.redirect(`/fixture/${fixtureId}`)
        } catch (e) {
            console.log(e);
        }
    },
    deleteFixture: async (req, res) => {
        const fixtureId = req.params.id;
        console.log("About to Delete")
        const foundResult = await Result.findOne({fixture: fixtureId}).populate("fixture"); // delete corresponding result
        if(foundResult){
            const thisMatch = new RemoveMatch(foundResult.homeTeamScore, foundResult.fixture.homeTeam, foundResult.awayTeamScore, foundResult.fixture.awayTeam);
            const executedMatch = await thisMatch.executeMatch()
            console.log(executedMatch)
            await Result.findByIdAndDelete({_id: foundResult._id});
            await Fixture.findByIdAndDelete({_id: fixtureId});
            res.redirect("/result")
        } else {
            await Fixture.findByIdAndDelete({_id: fixtureId});
            res.redirect("/fixture")
        }
    },
}
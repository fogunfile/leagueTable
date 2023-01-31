const Team = require("../models/team")
const Fixture = require("../models/fixture")
const Result = require("../models/result")
const RemoveMatch = require("../utils/removeMatch");
const moment = require("moment");

const shuffle = (arr) => {
    let counter = arr.length-1;
    while (counter > 0){
        let index = Math.floor(Math.random()*counter);
        [arr[counter], arr[index]] = [arr[index], arr[counter]]
        counter--;
    }
}

module.exports = {
    readFixtures: async (req, res) => {
        console.log("Heeeeeeeeeeeey")
        const fixtures = await Fixture.find({date: {
            $gte: moment().startOf("week"),
            $lte: moment(),
        }}).sort({date: -1}).populate("homeTeam awayTeam");
        res.render("fixture/", {fixtures});
    },
    getFixturesByDate: async (req, res) => {
        const fixtures = await Fixture.find({
            date: {
                $gte: moment(req.body.from), 
                $lte: moment(req.body.to).add(24, "hour")
            }
        }).sort({date: -1}).populate("homeTeam awayTeam");
        res.json(fixtures);
    },
    autoCreateFixtures: async (req, res) => {
        const teams = await Team.find();
        // const arr = [0,1,2,3];
        
        shuffle(teams);
        const pairs = []
        let n = teams.length;
        for(let i=0; i<n; i++){
            for(let j=1; j<n; j++){
                if(i+j < n){
                    pairs.push([teams[i], teams[i+j]])
                }
            }
        }
        pairs.forEach((pair, i)=>{
            let ranNum = Math.floor(Math.random()*i)
            if(ranNum % 2 > 0){
                shuffle(pair);
            }
        })
        let teamPairs = []
        pairs.forEach((pair)=>{
            let date = moment();
            let objPair = {homeTeam: pair[0], awayTeam: pair[1], date};
            teamPairs.push(objPair);
        })
        await Fixture.insertMany(teamPairs);
        res.redirect("/fixture");

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
            await Result.findByIdAndDelete({_id: foundResult._id});
            await Fixture.findByIdAndDelete({_id: fixtureId});
            res.redirect("/result")
        } else {
            await Fixture.findByIdAndDelete({_id: fixtureId});
            res.redirect("/fixture")
        }
    },
}
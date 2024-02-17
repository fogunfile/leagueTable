const Team = require("../models/team")

module.exports = {
    readOneTeam: async (req, res) => {
        const team = await Team.findById({_id: req.params.id});
        res.render("team/id", {team})
    },
    readTeams: async (req, res) => {
        const teams = await Team.find().sort({name: 1});
        res.render("team/", {teams});
    },
    toCreateTeam: async (req, res) => {
       res.render("team/new")
    },
    createTeam: async (req, res)=> {
        try {
            console.log(req.body);
            const newTeam = await Team.create(req.body);
            res.redirect("/");
        } catch (e) {
            console.log(e)
        }
    },
    toUpdateTeam: async (req, res) => {
        const team = await Team.findById({_id: req.params.id});
        res.render("team/edit", {team});
    },
    updateTeam: async (req, res) => {
        const updatedTeam = await Team.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true});
        res.redirect("team/id");
    },
    deleteTeam: async (req, res) => {
        const team = await Team.findById({_id: req.params.id});
        if(team.matchPlayed == 0){
            await Team.findByIdAndDelete({_id: req.params.id});
        }
        res.redirect("/team");
    },
}
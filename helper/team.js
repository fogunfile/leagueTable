const Team = require("../models/team")

module.exports = {
    readTeam: async (req, res) => {
        const chosenTeam = await Team.findById({_id: req.params.id});
        res.send(chosenTeam)
    },
    toCreateTeam: async (req, res) => {
       res.send(`
        <!doctype html>
        <html>
            <head>
                <title>Create Team</title>
            </head>
            <body>
                <input name="name" type="text" />
                <input name="description" type="text" />
            </body>
        </html>
       `)
    },
    createTeam: async (req, res)=> {
        try {
            const newTeam = await Team.create(req.body);
            res.send(newTeam);
        } catch (e) {
            console.log(e)
        }
    },
    toUpdateTeam: async (req, res) => {
        const chosenTeam = await Team.findById({_id: req.params.id});
        res.send(chosenTeam);
    },
    updateTeam: async (req, res) => {
        const updatedTeam = await Team.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true});
        res.send(updatedTeam);
    },
    deleteTeam: async (req, res) => {
        await Team.findByIdAndDelete({_id: req.params.id});
        res.send("deleted");
    },
}
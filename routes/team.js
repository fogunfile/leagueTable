const express = require("express");
const router = express.Router();
const AddMatch = require("../utils/addMatch");
const RemoveMatch = require("../utils/removeMatch");
const Team = require("../models/team")
const helper = require("../helper/team")
// import router from express

// const router = express.Router()

router.get("/", helper.readTeams)
router.post("/", helper.createTeam)
router.get("/new", helper.toCreateTeam)
router.get("/:id/edit", helper.toUpdateTeam)
router.get("/:id", helper.readOneTeam)
router.put("/:id", helper.updateTeam)

module.exports = router;
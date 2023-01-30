const express = require("express");
const router = express.Router();
const AddMatch = require("../utils/addMatch");
const RemoveMatch = require("../utils/removeMatch");
const Team = require("../models/team")
const helper = require("../helper/team")
// import router from express

// const router = express.Router()

router.get("/new", helper.toCreateTeam)
router.get("/:id/edit", helper.toUpdateTeam)
router.get("/:id", helper.readTeam)
router.post("/:id", helper.createTeam)
router.put("/:id", helper.readTeam)

module.exports = router;
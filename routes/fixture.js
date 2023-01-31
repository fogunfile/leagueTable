const express = require("express");
const router = express.Router();
const helper = require("../helper/fixture")

router.get("/", helper.readFixtures);
router.get("/new", helper.toCreateFixture);
router.post("/", helper.createFixture);
router.get("/:id/edit", helper.toUpdateFixture);
router.get("/:id", helper.readOneFixture);
router.put("/:id", helper.updateFixture);
router.delete("/:id", helper.deleteFixture);

module.exports = router;
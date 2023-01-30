const express = require("express");
const router = express.Router();
const helper = require("../helper/result")

router.get("/:id/edit", helper.toUpdateResult)
router.get("/:id", helper.readResult)
router.post("/:id/", helper.createResult)
router.put("/:id/", helper.updateResult)

module.exports = router;
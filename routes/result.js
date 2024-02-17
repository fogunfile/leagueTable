const express = require("express");
const router = express.Router();
const helper = require("../helper/result")

router.post("/:id", helper.createResult);
router.get("/", helper.readResults);
router.get("/:id/check", helper.checkResult);
router.get("/:id/new", helper.toCreateResult);
router.get("/:id/edit", helper.toUpdateResult);
router.get("/:id", helper.readOneResult);
router.put("/:id", helper.updateResult);
router.delete("/:id", helper.deleteResult);

module.exports = router;
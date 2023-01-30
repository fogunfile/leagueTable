const express = require("express");
const router = express.Router();

router.get("/", (req, res)=> {
    res.send("Fixture Route");
})

module.exports = router;
const       express             =       require("express")
    ,       matchRouter         =       express.Router()
    ,       db                  =       require("../models")
    ,       helper              =       require("../helper");


matchRouter.route("/")
    .get(helper.getAllMatches)
    .post(helper.postOneMatch)

matchRouter.route("/:thisMatchId")
    .get(helper.getOneMatch)
    .put(helper.updateOneMatch)
    .delete(helper.deleteOneMatch);

module.exports = matchRouter;
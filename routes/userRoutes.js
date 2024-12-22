var express = require("express");
var router = express.Router();
const {
  create,
  getAll,
  update,
  remove,
} = require("../controllers/userController");

const middleware = require("../middleware");

/* GET users listing. */
router.post("/create", create);

router.get("/get-all", middleware, getAll);

router.put("/update", update);

router.delete("/remove", remove);

module.exports = router;

const express = require("express");
const router = express.Router();
const controlller = require("../controllers/AuthController");
router.post("/signin", controller.signin);
router.post("/signup", controller.signup);
router.post("/logout", controller.logout);
module.exports = router;

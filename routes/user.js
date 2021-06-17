const express = require("express");
const router = express.Router();
const { userPlan } = require("../controllers/private");
const { protect } = require("../middleware/auth");

router.route("/user").get(protect, userPlan);

module.exports = router;

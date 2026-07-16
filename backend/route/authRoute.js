const express = require("express");

const router = express.Router();

const {
  register,
  login,
  getProfile,
  adminDashboard,
} = require("../controller/authController");

const protect = require("../middleware/protect");
const authorize = require("../middleware/authorize");

router.post("/register", register);
router.post("/login", login);

router.get("/profile", protect, getProfile);

router.get(
  "/admin",
  protect,
  authorize("admin"),
  adminDashboard
);

module.exports = router;
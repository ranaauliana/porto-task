const express = require("express");

const router = express.Router();

const guestRouter = require("../controllers/guestController");

router.get("/", guestRouter.getHome);

module.exports = router;

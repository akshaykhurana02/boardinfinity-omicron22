const express = require("express");
const router = express.Router();

// Getting all
router.get("/", async (req, res) => {
  res.send("Hello World!");
});

// Getting One
router.get("/:id", (req, res) => {
  res.send(`Hello ${req.params.id}`);
});

module.exports = router;

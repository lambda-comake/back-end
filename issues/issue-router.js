const express = require("express");

const Issues = require("./issue-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Issues.getAllIssues().then((issues) => {
    res.status(200).json(issues);
  });
});

module.exports = router;

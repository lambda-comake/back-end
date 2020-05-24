const express = require("express");

const Issues = require("./issue-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Issues.getAllIssues()
    .then((issues) => {
      res.status(200).json(issues);
    })
    .catch((err) => {
      res.status(500).json({ error: "issue retrieving issues data" });
    });
});

router.get("/:id", (req, res) => {
  Issues.getIssuesById(req.params.id).then((issues) => {
    console.log("get by id", issues);
    if (issues) {
      res.status(200).json(issues);
    } else {
      res
        .status(404)
        .json({ message: "Couldn't find any issues with that ID" });
    }
  });
});

module.exports = router;

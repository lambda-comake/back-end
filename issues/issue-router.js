const express = require("express");

const Issues = require("./issue-model.js");

const { validatePost } = require("./issue-middleware.js");

const router = express.Router();

// GETS all issues on the db
router.get("/", (req, res) => {
  Issues.getAllIssues()
    .then((issues) => {
      res.status(200).json(issues);
    })
    .catch((err) => {
      res.status(500).json({ error: "issue retrieving issues data" });
    });
});

// POST a issue
router.post("/", validatePost, (req, res) => {
  Issues.postIssue(req.body)
    .then((issue) => {
      res.status(201).json(issue);
    })
    .catch((err) => {
      res.status(500).json({ error: "error posting that issue", err });
    });
});

// GETS a specific issue by id
router.get("/:id", (req, res) => {
  Issues.getIssuesById(req.params.id).then((issues) => {
    if (issues) {
      res.status(200).json(issues);
    } else {
      res
        .status(404)
        .json({ message: "Couldn't find any issues with that ID" });
    }
  });
});

// EDIT a specific issue
router.put("/:id", validatePost, (req, res) => {
  Issues.getIssuesById(req.params.id).then((issues) => {
    if (issues) {
      Issues.editIssue(req.body, req.params.id)
        .then((update) => {
          res.status(200).json(update);
        })
        .catch((err) => {
          res.status(500).json({ error: "error updating that issue", err });
        });
    } else {
      res
        .status(404)
        .json({ message: "Couldn't find any issues with that ID" });
    }
  });
});

// DELETE a specific issue
router.delete("/:id", (req, res) => {
  Issues.removeIssue(req.params.id)
    .then((issue) => {
      if (issue) {
        res.status(200).json({ deleted: issue });
      } else {
        res
          .status(404)
          .json({ message: "Couldn't find any issues with that ID" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "error delete that issue", err });
    });
});

module.exports = router;

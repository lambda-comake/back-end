const express = require("express");

const Users = require("./user-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({ error: "issue retrieving users" });
    });
});

router.get("/:id", (req, res) => {
  Users.findUserProfile(req.params.id).then((user) => {
    if (user) {
      res.status(200).json(user);
    } else {
      res
        .status(404)
        .json({ message: "Couldn't find any issues with that ID" });
    }
  });
});

module.exports = router;

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
    console.log(user);
    if (user.length != 0) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "No profile created for that User yet" });
    }
  });
});

router.delete("/:id", (req, res) => {
  Users.removeUser(req.params.id)
    .then((user) => {
      if (user) {
        res.status(200).json({ deleted: user });
      } else {
        res
          .status(404)
          .json({ message: "Couldn't find any users with that ID" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "error delete that user", err });
    });
});

module.exports = router;

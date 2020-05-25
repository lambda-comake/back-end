const express = require("express");

const Users = require("../user/user-model.js");

const { validateProfile } = require("./profile-middleware.js");

const router = express.Router();

router.get("/", (req, res) => {
  Users.getProfiles()
    .then((profiles) => {
      res.status(200).json(profiles);
    })
    .catch((err) => {
      res.status(500).json({ error: "issue retrieving profile data" });
    });
});

router.post("/", validateProfile, (req, res) => {
  Users.postUserProfile(req.body)
    .then((profile) => {
      res.status(201).json(profile);
    })
    .catch((err) => {
      res.status(500).json({ error: "error posting that profile", err });
    });
});

module.exports = router;

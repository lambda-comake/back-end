const express = require("express");

const Profile = require("./profile-model");

const { validateProfile } = require("./profile-middleware.js");

const router = express.Router();

router.get("/", (req, res) => {
  Profile.getProfiles()
    .then((profiles) => {
      res.status(200).json(profiles);
    })
    .catch((err) => {
      res.status(500).json({ error: "issue retrieving profile data" });
    });
});

router.post("/", validateProfile, (req, res) => {
  Profile.postProfile(req.body)
    .then((profile) => {
      res.status(201).json(profile);
    })
    .catch((err) => {
      res.status(500).json({ error: "error posting that profile", err });
    });
});

router.put("/:id", (req, res) => {
  Profile.getProfileById(req.params.id)
    .then((profile) => {
      if (profile) {
        Profile.editProfile(req.body, req.params.id).then((update) => {
          res.status(200).json(update);
        });
      } else {
        res
          .status(404)
          .json({ message: "Couldn't find any profiles with that ID" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "issue editing that user", err });
    });
});

router.delete("/:id", (req, res) => {
  Profile.removeProfile(req.params.id)
    .then((user) => {
      if (user.length != 0) {
        res.status(200).json({ deleted: user });
      } else {
        res.status(400).json({ message: "No profiles with that Id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "issue deleting this profile", err });
    });
});

module.exports = router;

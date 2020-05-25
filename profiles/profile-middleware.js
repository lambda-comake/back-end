module.exports = {
  validateProfile,
};

const Users = require("../user/user-model.js");

function validateProfile(req, res, next) {
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const age = req.body.age;

  Users.findProfileBy({ email })
    .then((user) => {
      if (user.length > 0) {
        res.status(400).json({ message: "That email is already taken" });
      } else {
        if (email && firstName && lastName && age) {
          if (email.length < 256) {
            if (firstName.length < 256 && lastName.length < 256) {
              if (typeof age != "string") {
                next();
              } else {
                res.status(400).json({ message: "age must be an integer" });
              }
            } else {
              res.status(400).json({
                message:
                  "first and last name has a max character length of 255",
              });
            }
          } else {
            res
              .status(400)
              .json({ message: "email has a max character length of 255" });
          }
        } else {
          res.status(400).json({
            message: "Please provide a email, first name, last name, and age",
          });
        }
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Issue posting profiel", err });
    });
}

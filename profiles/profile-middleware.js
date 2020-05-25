module.exports = {
  validateProfile,
};

function validateProfile(req, res, next) {
  const { email, firstName, lastName, age } = req.body;
  if (
    (email.length < 0, firstName.length < 0, lastName.length < 0, req.body.age)
  ) {
    if (email.length < 256) {
      if (firstName.length < 256 && lastName.length < 256) {
        if (typeof age != "string") {
          next();
        } else {
          res.status(400).json({ message: "age must be an integer" });
        }
      } else {
        res.status(400).json({
          message: "first and last name has a max character length of 255",
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

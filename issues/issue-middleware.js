const Issues = require("./issue-model.js");

module.exports = {
  validatePost,
};

function validatePost(req, res, next) {
  const title = req.body.title;
  const descrip = req.body.description;

  if ((title, descrip)) {
    if (title.length < 256) {
      next();
    } else {
      res
        .status(400)
        .json({ message: "maximum title length is 255 characters" });
    }
  } else {
    res.status(400).json({ message: "please provide a title and description" });
  }
}

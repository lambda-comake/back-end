const db = require("../data/db-config.js");

module.exports = {
  getAllIssues,
};

function getAllIssues() {
  return db("issues");
}

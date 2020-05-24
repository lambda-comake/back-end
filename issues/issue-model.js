const db = require("../data/db-config.js");

module.exports = {
  getAllIssues,
  getIssuesById,
};

function getAllIssues() {
  return db("issues");
}

function getIssuesById(id) {
  return db("issues").where({ id }).first();
}

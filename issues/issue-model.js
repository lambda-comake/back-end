const db = require("../data/db-config.js");

module.exports = {
  getAllIssues,
  getIssuesById,
  postIssue,
  editIssue,
};

function getAllIssues() {
  return db("issues");
}

function getIssuesById(id) {
  return db("issues").where({ id }).first();
}

function postIssue(issue) {
  return db("issues")
    .insert(issue, "id")
    .then((ids) => {
      return getIssuesById(ids[0]);
    });
}

function editIssue(changes, id) {
  return db("issues")
    .update(changes)
    .where({ id })
    .then(() => {
      return getIssuesById(id);
    });
}

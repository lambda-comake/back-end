const db = require("../data/db-config.js");

module.exports = {
  getAllIssues,
  getIssuesById,
  postIssue,
  editIssue,
  removeIssue,
};

function getAllIssues() {
  return db("issues")
    .select(
      "issues.id",
      "issues.title",
      "issues.description",
      "issues.upVotes",
      "issues.user_id",
      "users.username"
    )
    .join("users", "users.id", "=", "issues.user_id");
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

function removeIssue(id) {
  return getIssuesById(id).then((del) => {
    return db("issues")
      .where({ id })
      .del()
      .then(() => {
        return del;
      });
  });
}

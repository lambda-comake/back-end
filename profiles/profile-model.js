const db = require("../data/db-config.js");

module.exports = {
  postProfile,
  getProfiles,
  removeProfile,
  findProfileBy,
  editProfile,
  getProfileById,
};

function findUserProfile(id) {
  return db("users")
    .select(
      "users.id",
      "users.username",
      "profiles.email",
      "profiles.firstName",
      "profiles.lastName",
      " profiles.age"
    )
    .join("profiles", "users.id", "=", "profiles.user_id")
    .where("user_id", id);
}

function getProfiles() {
  return db("profiles");
}

function getProfileById(id) {
  return db("profiles").where({ id });
}

function removeProfile(id) {
  return findUserProfile(id).then((del) => {
    return db("profiles")
      .where({ id })
      .del()
      .then(() => {
        return del;
      });
  });
}

function postProfile(profile) {
  return db("profiles")
    .insert(profile, "id")
    .then((ids) => {
      console.log(ids);
      return getProfileById(ids[0]);
    });
}

function findProfileBy(filter) {
  return db("profiles").where(filter);
}

function editProfile(changes, id) {
  return db("profiles")
    .update(changes)
    .where({ id })
    .then(() => {
      return getProfileById(id);
    });
}

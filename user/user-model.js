const db = require("../data/db-config.js");

module.exports = {
  find,
  findBy,
  add,
  findById,
  findUserProfile,
  postProfile,
  getProfiles,
  removeProfile,
  findProfileBy,
  removeUser,
};

function find() {
  return db("users").select("id", "username");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");

  return findById(id);
}

function findById(id) {
  return db("users").select("id", "username").where({ id: id }).first();
}

function removeUser(id) {
  return findById(id).then((del) => {
    return db("users")
      .where({ id })
      .del()
      .then(() => {
        return del;
      });
  });
}

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

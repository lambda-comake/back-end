const db = require("../data/db-config.js");

module.exports = {
  find,
  findBy,
  add,
  findById,
  findUserProfile,
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

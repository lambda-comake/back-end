const db = require("../data/db-config.js");

module.exports = {
  find,
  findBy,
  add,
  findById,
  findUserProfile,

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
  return db("users")
    .select("id", "username", "email", "firstName", "lastName", "age")
    .where({ id: id })
    .first();
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
    .select("issues.id", "issues.title", "issues.description")
    .join("issues", "users.id", "=", "issues.user_id")
    .where("user_id", id);
}

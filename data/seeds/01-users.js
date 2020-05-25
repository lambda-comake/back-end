exports.seed = function (knex) {
  return knex("users").insert([
    { id: 1, username: "corkcicle", password: "123" },
    { id: 2, username: "water", password: "pass" },
  ]);
};

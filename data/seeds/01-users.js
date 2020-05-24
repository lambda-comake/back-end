exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("table_name").insert([
        { id: 1, username: "corkcicle", password: "123" },
        { id: 2, username: "water", password: "pass" },
      ]);
    });
};

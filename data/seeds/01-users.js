exports.seed = function (knex) {
  return knex("users").insert([
    {
      id: 1,
      username: "corkcicle",
      password: "123",
      email: "corkcicle@gmail.com",
      firstName: "cork",
      lastName: "cicle",
      age: 24,
    },
    {
      id: 2,
      username: "water",
      password: "pass",
      email: "water@gmail.com",
      firstName: "water",
      lastName: "isWet",
      age: 99,
    },
  ]);
};

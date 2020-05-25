exports.seed = function (knex) {
  return knex("profiles")
    .truncate()
    .then(function () {
      return knex("profiles").insert([
        {
          id: 1,
          email: "corkcicle@gmail.com",
          firstName: "John",
          lastName: "Doe",
          age: "25",
          address: "123 abc st",
          user_id: 1,
        },
        {
          id: 2,
          email: "water@aim.com",
          firstName: "Timmy",
          lastName: "Water",
          age: "50",
          user_id: 2,
        },
      ]);
    });
};

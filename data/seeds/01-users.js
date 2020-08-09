exports.seed = function (knex) {
  return knex("users").insert([
    {
      id: 1,
      username: "Oprah12",
      password: "123",
      email: "Oprah12@gmail.com",
      firstName: "Oprah",
      lastName: "Winfrey",
      age: 66,
    },
    {
      id: 2,
      username: "TheBradPitt",
      password: "123",
      email: "BradPitt@gmail.com",
      firstName: "Brad",
      lastName: "Pitt",
      age: 56,
    },
    {
      id: 3,
      username: "B-Obama",
      password: "123",
      email: "BarackObama@gmail.com",
      firstName: "Barack",
      lastName: "Obama",
      age: 59,
    },
    {
      id: 4,
      username: "GeorgeC",
      password: "123",
      email: "GeorgeClooney@gmail.com",
      firstName: "George",
      lastName: "Clooney",
      age: 59,
    },
    {
      id: 5,
      username: "TigerWoods1",
      password: "123",
      email: "TigerWoods@gmail.com",
      firstName: "Tiger",
      lastName: "Woods",
      age: 44,
    },
  ]);
};

const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/db-config.js");

beforeEach(async () => {
  await db.seed.run();
});

afterEach(async () => {
  await db("issues").truncate();
  await db("profiles").truncate();
  await db("users").truncate();
});

describe("server", () => {
  it("can run the tests", () => {
    expect(true).toBeTruthy();
  });
});

test("GET / users", async () => {
  await request(server)
    .post("/auth/register")
    .send({ username: "billyBob1231", password: "pass" });
  let user = await request(server)
    .post("/auth/login")
    .send({ username: "billyBob1231", password: "pass" });
  let token = user.body.token;
  return request(server)
    .get("/api/users/")
    .set("Authorization", token)
    .expect(200);
});

test("GET /:id users to be falsy", async () => {
  await request(server)
    .post("/auth/register")
    .send({ username: "billyBobb", password: "pass" });
  let user = await request(server)
    .post("/auth/login")
    .send({ username: "billyBobb", password: "pass" });
  let token = user.body.token;

  return request(server)
    .get("/api/users/99")
    .set("Authorization", token)
    .expect(404);
});

test("DELETES /:id", async () => {
  await request(server)
    .post("/auth/register")
    .send({ id: 23, username: "delete user", password: "pass" });
  let user = await request(server)
    .post("/auth/login")
    .send({ username: "delete user", password: "pass" });
  let token = user.body.token;

  return request(server)
    .delete("/api/users/23")
    .set("Authorization", token)
    .expect(200);
});

test("DELETES /:id expect  404", async () => {
  await request(server)
    .post("/auth/register")
    .send({ username: "delete user", password: "pass" });
  let user = await request(server)
    .post("/auth/login")
    .send({ username: "delete user", password: "pass" });
  let token = user.body.token;

  return request(server)
    .delete("/api/users/595")
    .set("Authorization", token)
    .expect(404);
});

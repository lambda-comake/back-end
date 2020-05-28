const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/db-config.js");

beforeAll(async () => {
  await db("issues").truncate();
  await db("profiles").truncate();
  await db("users").truncate();
});

describe("server", () => {
  it("can run the tests", () => {
    expect(true).toBeTruthy();
  });
});

test("GET / issue router", async () => {
  await request(server)
    .post("/auth/register")
    .send({ username: "billy125", password: "pass" });
  let user = await request(server)
    .post("/auth/login")
    .send({ username: "billy125", password: "pass" });
  let token = user.body.token;
  return request(server)
    .get("/api/issues/")
    .set("Authorization", token)
    .expect(200);
});

test("POSTS TO /api/issues", async () => {
  await request(server)
    .post("/auth/register")
    .send({ username: "billyBob123", password: "pass" });
  let user = await request(server)
    .post("/auth/login")
    .send({ username: "billyBob123", password: "pass" });

  let token = user.body.token;
  return request(server)
    .post("/api/issues/")
    .set("Authorization", token)
    .send({ title: "blah", description: "blah", user_id: 1 })
    .expect(201);
});

test("POSTS TO /api/issues testing for failure", async () => {
  await request(server)
    .post("/auth/register")
    .send({ username: "Tanner12", password: "pass" });
  let user = await request(server)
    .post("/auth/login")
    .send({ username: "Tanner12", password: "pass" });

  let token = user.body.token;
  return request(server)
    .post("/api/issues/")
    .set("Authorization", token)
    .send({ title: "", description: "", user_id: 1 })
    .expect(400);
});

test("GETs a specific user /api/issues/:id", async () => {
  await request(server)
    .post("/auth/register")
    .send({ username: "asdf123", password: "pass" });
  let user = await request(server)
    .post("/auth/login")
    .send({ username: "asdf123", password: "pass" });
  let token = user.body.token;
  return request(server)
    .get("/api/issues/1")
    .set("Authorization", token)
    .expect(200);
});

test("GETs a issue that doesnt exist /api/issues/:id", async () => {
  await request(server)
    .post("/auth/register")
    .send({ username: "user55", password: "pass" });
  let user = await request(server)
    .post("/auth/login")
    .send({ username: "user55", password: "pass" });
  let token = user.body.token;
  return request(server)
    .get("/api/issues/5")
    .set("Authorization", token)
    .expect(404);
});

test("PUTS TO /api/issues testing for success", async () => {
  await request(server)
    .post("/auth/register")
    .send({ username: "water99", password: "pass" });
  let user = await request(server)
    .post("/auth/login")
    .send({ username: "water99", password: "pass" });

  let token = user.body.token;
  return request(server)
    .put("/api/issues/1")
    .set("Authorization", token)
    .send({ title: "CHANGE", description: "CHANGE", user_id: 1 })
    .expect(200);
});

test("PUTS TO /api/issues testing for failure", async () => {
  await request(server)
    .post("/auth/register")
    .send({ username: "justin55", password: "pass" });
  let user = await request(server)
    .post("/auth/login")
    .send({ username: "justin55", password: "pass" });

  let token = user.body.token;
  return request(server)
    .put("/api/issues/1")
    .set("Authorization", token)
    .send({ title: "", description: "", user_id: 1 })
    .expect(400);
});

test("DELETES a issue that exists /api/issues/:id", async () => {
  await request(server)
    .post("/auth/register")
    .send({ username: "jesse12", password: "pass" });
  let user = await request(server)
    .post("/auth/login")
    .send({ username: "jesse12", password: "pass" });
  let token = user.body.token;
  return request(server)
    .delete("/api/issues/1")
    .set("Authorization", token)
    .expect(200);
});

test("DELETES a issue that doesnt exist /api/issues/:id", async () => {
  await request(server)
    .post("/auth/register")
    .send({ username: "mason12", password: "pass" });
  let user = await request(server)
    .post("/auth/login")
    .send({ username: "mason12", password: "pass" });
  let token = user.body.token;
  return request(server)
    .delete("/api/issues/5")
    .set("Authorization", token)
    .expect(404);
});

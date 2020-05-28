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

describe("/api/profiles endpoints", () => {
  it("GET / profiles", async () => {
    await request(server)
      .post("/auth/register")
      .send({ username: "billyBob123", password: "pass" });
    let user = await request(server)
      .post("/auth/login")
      .send({ username: "billyBob123", password: "pass" });
    let token = user.body.token;
    return request(server)
      .get("/api/profiles/")
      .set("Authorization", token)
      .expect(200);
  });

  it("POST /api/profiles succesfully", async () => {
    await request(server)
      .post("/auth/register")
      .send({ username: "billyBob12399", password: "pass" });
    let user = await request(server)
      .post("/auth/login")
      .send({ username: "billyBob12399", password: "pass" });

    let token = user.body.token;
    return request(server)
      .post("/api/profiles/")
      .set("Authorization", token)
      .send({
        email: "jimmyjohns@gmali.com",
        firstName: "jimmy",
        lastName: "john",
        age: 23,
        user_id: 1,
      })
      .expect(201);
  });

  it("POST /api/profiles expect failure", async () => {
    await request(server)
      .post("/auth/register")
      .send({ username: "billyBob123", password: "pass" });
    let user = await request(server)
      .post("/auth/login")
      .send({ username: "billyBob123", password: "pass" });

    let token = user.body.token;
    return request(server)
      .post("/api/profiles/")
      .set("Authorization", token)
      .send({
        email: "",
        firstName: "jimmy",
        lastName: "john",
        age: 23,
        user_id: 1,
      })
      .expect(400);
  });

  it("EDIT /api/profiles expect success", async () => {
    await request(server)
      .post("/auth/register")
      .send({ username: "johnny756", password: "pass" });
    let user = await request(server)
      .post("/auth/login")
      .send({ username: "johnny756", password: "pass" });

    let token = user.body.token;
    return request(server)
      .put("/api/profiles/1")
      .set("Authorization", token)
      .send({
        email: "jimmyjohnsssss@gmali.com",
        firstName: "CHANGE",
        lastName: "CHANGE",
        age: 23,
        user_id: 1,
      })
      .expect(200);
  });

  it("EDIT /api/profiles expect failure", async () => {
    await request(server)
      .post("/auth/register")
      .send({ username: "billyBob123", password: "pass" });
    let user = await request(server)
      .post("/auth/login")
      .send({ username: "billyBob123", password: "pass" });

    let token = user.body.token;
    return request(server)
      .put("/api/profiles/1")
      .set("Authorization", token)
      .send({
        email: "",
        firstName: "",
        lastName: "",
        age: "23",
      })
      .expect(400);
  });

  it("DELETES /api/profiles/ expect success", async () => {
    await request(server)
      .post("/auth/register")
      .send({ username: "billyBob123", password: "pass" });
    let user = await request(server)
      .post("/auth/login")
      .send({ username: "billyBob123", password: "pass" });

    let token = user.body.token;
    return request(server)
      .delete("/api/profiles/1")
      .set("Authorization", token)
      .expect(200);
  });

  it("DELETES /api/profiles/ expect failure", async () => {
    await request(server)
      .post("/auth/register")
      .send({ username: "billyBob1235", password: "pass" });
    let user = await request(server)
      .post("/auth/login")
      .send({ username: "billyBob1235", password: "pass" });

    let token = user.body.token;
    return request(server)
      .delete("/api/profiles/7")
      .set("Authorization", token)
      .expect(400);
  });
});

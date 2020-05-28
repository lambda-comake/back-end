const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/db-config.js");

let token;

beforeAll(async () => {
  await db("issues").truncate();
  await db("profiles").truncate();
  await db("users").truncate();

  await request(server)
    .post("/auth/register")
    .send({ username: "billyBob123", password: "pass" });
  await request(server)
    .post("/auth/login")
    .send({ username: "billyBob123", password: "pass" })
    .then((res) => {
      let token = res.body.token;
      console.log("!!!!!!!!!!", token);
      return token;
    });
});

describe("server", () => {
  it("can run the tests", () => {
    expect(true).toBeTruthy();
  });
});

describe("gets the issues", () => {
  it("GET / issue router", () => {
    return request(server)
      .get("/api/issues/")
      .set("Authorization", token)
      .expect(200);
  });
});

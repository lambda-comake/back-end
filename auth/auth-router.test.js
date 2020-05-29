const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/db-config.js");

afterAll(async () => {
  await db("issues").truncate();
  await db("profiles").truncate();
  await db("users").truncate();
});

describe("server", () => {
  it("can run the tests", () => {
    expect(true).toBeTruthy();
  });
});

describe("/auth/register", () => {
  it("POST /api/auth/register to be successful", async () => {
    const res = await request(server)
      .post("/auth/register")
      .send({ username: "justinaa", password: "pass" });

    expect(res.status).toBe(201);
    expect(res.body).toMatchObject({
      data: { username: "justinaa" },
    });
  });

  it("POST /api/auth/register to be falsy", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ username: "", password: "pass" });

    expect(res.status).toBe(404);
  });
});

describe("/auth/login", () => {
  it("POST /api/auth/login to be successful", async () => {
    const register = await request(server)
      .post("/auth/register")
      .send({ username: "asdf1111", password: "pass" });
    const res = await request(server)
      .post("/auth/login")
      .send({ username: "asdf1111", password: "pass" });

    expect(res.type).toBe("application/json");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("token");
  });

  it("POST /api/auth/login to be invalid credentials", async () => {
    const register = await request(server)
      .post("/auth/register")
      .send({ username: "asdf", password: "pass" });
    const res = await request(server)
      .post("/auth/login")
      .send({ username: "wrong", password: "pass" });

    expect(res.status).toBe(401);
    expect(res.body).toMatchObject({
      message: "Invalid Credentials",
    });
  });
});

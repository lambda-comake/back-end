const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/db-config.js");

describe("server", () => {
  it("can run the tests", () => {
    expect(true).toBeTruthy();
  });
});

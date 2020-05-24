const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");

const issueRouter = require("../issues/issue-router.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

server.use("/api/issues", issueRouter);

module.exports = server;

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");

const authenticate = require("../auth/auth-middleware");
const issueRouter = require("../issues/issue-router.js");
const authRouter = require("../auth/auth-router.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

server.use("/api/issues", authenticate, issueRouter);
server.use("/auth", authRouter);

module.exports = server;

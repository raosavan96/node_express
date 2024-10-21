const express = require("express");
const server = express();
server.use(express.json());

const apiRouter = require("./router/api");

server.use("/api", apiRouter);

server.set("view engine", "ejs");
let port = 5000;
server.listen(port, () => {
  console.log(`http://localhost:${port}/api`);
});

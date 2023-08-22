const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PORT = 3001;
const server = express();
const router = require("./Routes/index");
const { conn } = require("./DB_connection");

server.use(morgan("dev"));
server.use(cors());
server.use(express.json());
server.use("/rickandmorty", router);

server.listen(PORT, async () => {
  await conn.sync({ force: true });
  console.log("Server raised in port: " + PORT);
});

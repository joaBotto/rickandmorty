const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PORT = 3001;
const server = express();
const router = require("./Routes/index");

server.use(morgan("dev")); //todo ---> Un midleware es el intermediario entre la request del cliente, y la response que damos desde el servidor (intermediario entre el front y el back), nos sirve para validar los datos.
server.use(cors());
server.use(express.json());
server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});

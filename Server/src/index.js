const express = require("express");
const server = express();
const PORT = 3001;

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});

// const http = require("http");
// const getCharById = require("./Controllers/getCharById");
// const PORT = 3001;
// const server = http.createServer((req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   try {
//     const { url } = req;
//     if (url.includes("/rickandmorty/character")) {
//       const id = url.split("/").at(-1);
//       getCharById(res, id);
//     }
//   } catch (error) {
//     console.log(error);
//     throw new Error(error);
//   }
// });

// server.listen(PORT, "localhost", console.log(`Server raised in port ${PORT}`));

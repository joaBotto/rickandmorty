// const { fs } = require("fs");
const http = require("http");
const data = require("./Utils/data");
const PORT = 3001;
const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log(req);
  const { url } = req;
  if (url.includes("/rickandmorty/character")) {
    const id = Number(url.split("/").at(-1));
    const personaje = data.find((personaje) => personaje.id === id);
    if (personaje) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(personaje));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "character not founded" }));
    }
  } else {
    res.writeHead(403, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "route not founded" }));
  }
});

server.listen(PORT, "localhost", console.log(`Server raised in port ${PORT}`));

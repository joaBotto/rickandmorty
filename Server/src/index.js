// const { fs } = require("fs");
const http = require("http");
const data = require("./Utils/data");
const PORT = 3001;
const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  //Aqui obtenemos la url y el metodo para la solicitud ->
  const { pathname } = url.parse(req.url);
  const method = req.method;

  //Ahora verificaremos si la url incluye "/rickandmorty/character" ->
  if (pathname.startsWith("/rickandmorty/character")) {
    //Entonces traemos el ID ->
    const id = pathname.split("/").pop();

    //Buscamos el personaje correspondiente en el archivo data.js ->
    const character = data.find((character) => character.id === Number(id));

    //Luego verificaremos si se encontro el personaje ->
    if (character) {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(character));
    } else {
      //Si no encontro el presonaje ->
      res.statusCode = 404;
      res.end(JSON.stringify({ error: "Character not founded" }));
    }
  } else {
    //Si la url no encuentra la ruta, envia una respuesta de error ->
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "Route not founded" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server raised in port ${PORT}`);
});

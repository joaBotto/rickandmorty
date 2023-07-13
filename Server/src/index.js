// const { fs } = require("fs");
const http = require("http");
const data = require("./Utils/data");
const PORT = 3001;
const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { url } = req;
  if (url.includes("/rickandmorty/character")) {
    // El código utiliza la función split("/") para dividir la URL en varias partes utilizando la barra diagonal como separador. Luego, at(-1) se utiliza para obtener el último elemento del arreglo resultante. Este último elemento supuestamente contiene un número en forma de texto.
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

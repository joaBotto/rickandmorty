const axios = require("axios");
//
const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const character = {
        id: response.data.id,
        name: response.data.name,
        gender: response.data.gender,
        species: response.data.species,
        origin: res.data.origin,
        image: response.data.image,
        status: response.data.status,
      };
      // res.writeHead(200, { "Content-Type": "application/json" });
      // res.end(JSON.stringify(character));
      res.status(200).json(character);
    })
    .catch((error) => {
      // res.writeHead(500, { "Content-Type": "text/plain" });
      // res.end(JSON.stringify({ message: "character not founded" }));
      res.status(500).type("text/plain").send(error.message);
    });
};

module.exports = { getCharById };

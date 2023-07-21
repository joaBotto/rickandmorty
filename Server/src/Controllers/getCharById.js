const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");
const getCharById = (req, res) => {
  const { id } = req.params;
  axios
    .get(URL + id)
    .then((response) => {
      const character = response.data;
      if (character.error) {
        res.status(404).json({ message: "Not found" });
      } else {
        const { id, name, gender, species, origin, image, status } = character;
        res.json({ id, name, gender, species, origin, image, status });
      }
    })
    .catch((error) => {
      if (error.response.status === 404) {
        res.status(404).send("Not found");
      } else {
        res.status(500).send({ message: error.message });
      }
    });
};
module.exports = getCharById;
// const axios = require("axios");
// const getCharById = (res, id) => {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({ data }) => {
//       const { id, name, gender, species, origin, image, status } = data;
//       let character = { id, name, gender, species, origin, image, status };
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(character));
//     })
//     .catch((error) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end(error.message);
//     });
// };

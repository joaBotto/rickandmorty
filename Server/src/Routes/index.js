const { Router } = require("express");
const login = require("../Controllers/login");
const getCharById = require("../Controllers/getCharById");
const { postFav, deleteFav } = require("../Controllers/handleFavourites");

const router = Router();
router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;

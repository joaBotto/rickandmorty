let myFavourites = [];

function postFav(req, res) {
  myFavourites.push(req.body);
  return res.status(201).json(myFavourites);
}

function deleteFav(req, res) {
  const { id } = req.params;
  myFavourites = myFavourites.filter((fav) => fav.id != id);
  return res.status(200).json(myFavourites);
}

module.exports = {
  postFav,
  deleteFav,
};

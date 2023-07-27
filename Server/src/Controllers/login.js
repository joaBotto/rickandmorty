const users = require("../Utils/users");
// ver archivo .env
const login = (req, res) => {
  const { email, password } = req.query;

  let access = false;

  users.find((user) => user.email === email && user.password === password);
  if (users) {
    return res.status(204).json({ access: true });
  }
  return res.status(403).json({ access: false });
};
//
module.exports = login;

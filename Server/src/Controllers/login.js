const datalog = require("../Utils/users");
const login = () => {
  const { email, password } = req.query;
  const user = usuarios.filter(
    (user) => user.email === email && user.password === password
  );
};
module.exports = login;

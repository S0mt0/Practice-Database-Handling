const app = require("express")();

const getAdmin = async (req, res) => {
  res.send("Welcome to the admin dashboard! :)");
};

module.exports = getAdmin;

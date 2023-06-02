const app = require("express")();

const getStaff = async (req, res) => {
  res.send("Welcome to the Staff page! :)");
};

module.exports = getStaff;

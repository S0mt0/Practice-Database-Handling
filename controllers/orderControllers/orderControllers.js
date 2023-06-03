const app = require("express")();

const getOrder = async (req, res) => {
  res.send("Welcome to the Orders page! :)");
};

module.exports = getOrder;

const app = require("express")();

const getBlog = async (req, res) => {
  res.send("Welcome to the Blogs page! :)");
};

module.exports = getBlog;

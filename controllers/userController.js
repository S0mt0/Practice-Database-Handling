const app = require("express")();
const { user } = require("../db/models/models");

const getUser = async (req, res) => {
  const users = await user.find();
  res.status(200).json({ status: "success", users });
};

module.exports = getUser;

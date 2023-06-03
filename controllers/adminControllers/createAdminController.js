require("express-async-errors");

const createAdmin = async (req, res) => {
  res.status(200).send("Welcome. You can now post to add new admin users.");
};

module.exports = createAdmin;

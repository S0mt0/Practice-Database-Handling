require("express-async-errors");

const updateAdmin = async (req, res) => {
  res.status(200).send("Welcome. You can now update an admin user.");
};

module.exports = updateAdmin;

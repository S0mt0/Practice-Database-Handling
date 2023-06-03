require("express-async-errors");

const deleteAdmin = async (req, res) => {
  res.status(200).send("Welcome. You can now delete an admin.");
};

module.exports = deleteAdmin;

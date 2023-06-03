const { admin } = require("../../db/models/models");

const createAdmin = async (req, res) => {
  const newAdmin = await admin.create(req.body);
  res.status(201).json({
    status: "ok",
    message: `${req.body.username} is now an Admin User.`,
    newAdmin,
  });
};

module.exports = createAdmin;

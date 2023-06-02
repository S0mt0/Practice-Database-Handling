const { admin } = require("../db/models/models");

const getAdmin = async (req, res) => {
  const adminUsers = await admin.find({
    role: { $regex: /^admin$/, $options: "i" },
  });

  res
    .status(200)
    .json({ status: "success", adminUsers, nbHits: adminUsers.length });
};

module.exports = getAdmin;

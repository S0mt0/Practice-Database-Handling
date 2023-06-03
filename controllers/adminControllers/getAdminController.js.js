const { admin } = require("../../db/models/models");
require("express-async-errors");

const getAdmin = async (req, res) => {
  // Filtered Search
  const { id } = req.params;
  if (id) {
    const adminUser = await admin.findById(id);
    return res
      .status(200)
      .json({ status: "ok", adminUser, nbHits: adminUser.length });
  }
  // By query params
  const { username, role } = req.query;
  let queryObject = {};

  // username
  if (username) {
    queryObject.username = username;
    const adminUsers = await admin.find(queryObject);

    return res
      .status(200)
      .json({ status: "ok", adminUsers, nbHits: adminUsers.length });
  }

  // role
  if (role) {
    queryObject.role = role;
    const adminUsers = await admin.find(queryObject);

    return res
      .status(200)
      .json({ status: "ok", adminUsers, nbHits: adminUsers.length });
  }

  const adminUsers = await admin.find();
  return res
    .status(200)
    .json({ status: "ok", adminUsers, nbHits: adminUsers.length });
};

module.exports = getAdmin;

// const adminUsers = await admin.find({
//   role: { $regex: /^admin$/, $options: "i" },
// });

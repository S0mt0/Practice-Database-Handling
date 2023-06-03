const { admin } = require("../../db/models/models");

const getAdmin = async (req, res) => {
  // Filtered Search
  const { id } = req.params;
  if (id) {
    const adminUser = await admin.findById(id);
    return res.status(200).json({ nbHits: adminUser.length, adminUser });
  }
  // By query params
  const { username, role, sort, fields } = req.query;
  const queryObject = {};

  // username
  if (username) {
    queryObject.username = { $regex: username, $options: "i" };
  }
  // role
  if (role) {
    queryObject.role = { $regex: role, $options: "i" };
  }

  // =================================================================
  // sorting
  let result = admin.find(queryObject);
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("role");
  }
  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  }
  // pagination
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const adminUsers = await result;
  return res.status(200).json({ nbHits: adminUsers.length, adminUsers });
};

module.exports = getAdmin;

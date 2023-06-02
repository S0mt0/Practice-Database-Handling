const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Admin name must be provided"],
  },
  password: {
    type: String,
    required: [true, "Admin password must be provided"],
  },
  role: {
    type: String,
    validate: {
      validator: (value) => {
        const allowedRoles = ["admin", "sales", "customer service", "manager"];
        return allowedRoles.some(
          (role) => role.toLowerCase() === value.toLowerCase()
        );
      },
      message:
        "-{VALUE}- is not an authorized role. Please choose a valid role.",
    },
    required: [true, "Role must be specified."],
  },
  imgURL: String,
  // profileImg: Buffer,
});

module.exports = adminSchema;

const { Schema } = require("mongoose");

const staffSchema = new Schema({
  username: {
    type: String,
    required: [true, "Staff name must be provided"],
  },
  password: {
    type: String,
    required: [true, "Staff password must be provided"],
  },
  role: {
    type: String,
    validate: {
      validator: (value) => {
        const allowedRoles = ["sales", "customer service", "manager"];
        return allowedRoles.some(
          (role) => role.toLowerCase() === value.toLowerCase()
        );
      },
      message: "Invalid role. Please choose a valid role.",
    },
    required: true,
  },
  imgURL: String,
  // profileImg: Buffer,
});

module.exports = staffSchema;

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
    enum: {
      values: ["CEO", "manager"],
      message: "-{VALUE}- is not supported. Please choose a valid role.",
    },
    required: [true, "Role is required"],
  },

  imgURL: {
    type: String,
    default: "http://noPhotos.com",
  },
});

module.exports = adminSchema;

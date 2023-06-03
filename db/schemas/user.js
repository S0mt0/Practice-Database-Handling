const { Schema } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username must be provided"],
  },

  password: {
    type: String,
    required: [true, "User password must be provided"],
  },

  imgURL: String,
});

module.exports = userSchema;

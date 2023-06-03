const { Schema } = require("mongoose");

const blogSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "Admin" },

  title: {
    type: String,
    required: [true, "Each blog post must have a title"],
  },

  body: {
    type: String,
    required: [true, "Each blog post must have a body content."],
  },

  imgURL: {
    type: String,
    default: "http://noPhotos.com",
  },

  featured: {
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = blogSchema;

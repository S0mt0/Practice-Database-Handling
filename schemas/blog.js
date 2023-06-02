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
  imgURL: String,
  // images: Buffer,
  featured: Boolean,
});

module.exports = blogSchema;

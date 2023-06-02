// schema imports
const { model } = require("mongoose");
const adminSchema = require("../schemas/admin");
const blogSchema = require("../schemas/blog");
const orderSchema = require("../schemas/order");
const userSchema = require("../schemas/user");
const staffSchema = require("../schemas/staff");

// models
const admin = model("Admin", adminSchema);
const blog = model("Blog", blogSchema);
const order = model("Order", orderSchema);
const user = model("User", userSchema);
const staff = model("Staff", staffSchema);

module.exports = { admin, blog, order, user, staff };

// console.log(module.exports);

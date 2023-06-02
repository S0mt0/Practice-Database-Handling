const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  orderDate: {
    type: Date,
    required: [true, "Time of order must be provided."],
  },
  orderItems: {
    type: [
      {
        item: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          default: 1,
        },
        totalCost: {
          type: Number,
          required: true,
        },
      },
    ],
    validate: {
      validator: function (orderItems) {
        return orderItems.length > 0;
      },
      message: "At least one order must be made.",
    },
    shipmentAddress: {
      type: "String",
      required: [true, "Please provide a shipment address."],
    },
  },
});

module.exports = orderSchema;

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  createdAt: {
    type: Date,
    default: Date.now(),
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
      default: "Office Pickup",
    },
  },
});

module.exports = orderSchema;

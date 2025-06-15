import mongoose from "mongoose";

const orderschema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        watch: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Watch",
          required: true,
        },
        quantity: {
          type: Number,
         required: true,
        },
      },
    ],

    totalprice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "placed",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderschema);

export default Order;

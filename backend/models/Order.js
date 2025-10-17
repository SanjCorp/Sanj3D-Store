import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerName: String,
  email: String,
  address: String,
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
    },
  ],
  total: Number,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Order", orderSchema);

import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, default: 1 },
  addedAt: { type: Date, default: Date.now }
});

export default mongoose.model("Cart", cartSchema);

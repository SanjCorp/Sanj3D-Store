import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Order", orderSchema);

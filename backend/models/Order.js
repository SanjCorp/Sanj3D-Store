import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  customer: String,
  email: String,
  items: Array,
  total: Number,
  date: { type: Date, default: Date.now }
});
export default mongoose.model("Order", orderSchema);

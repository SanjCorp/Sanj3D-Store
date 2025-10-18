// models/Order.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  product: String,
  quantity: Number,
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export default Order;

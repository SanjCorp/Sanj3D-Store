import express from "express";
import Order from "../models/Order.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

router.post("/", async (req, res) => {
  const newOrder = new Order(req.body);
  await newOrder.save();
  res.json(newOrder);
});

export default router;

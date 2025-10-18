import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// POST nuevo pedido
router.post("/", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order); // retorna JSON del pedido
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET todos los pedidos
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

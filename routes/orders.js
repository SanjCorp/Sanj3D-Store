import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// Crear pedido
router.post("/", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los pedidos
router.get("/", async (req, res) => {
  const orders = await Order.find().populate("products.productId");
  res.json(orders);
});

export default router;

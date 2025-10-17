import express from "express";
import Cart from "../models/cart.js";

const router = express.Router();

// Add to cart
router.post("/", async (req, res) => {
  try {
    const cartItem = new Cart(req.body);
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get cart items
router.get("/", async (req, res) => {
  try {
    const items = await Cart.find().populate("productId");
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

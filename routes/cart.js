import express from "express";
import Cart from "../models/cart.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const carts = await Cart.find();
  res.json(carts);
});

router.post("/", async (req, res) => {
  const newCart = new Cart(req.body);
  await newCart.save();
  res.json({ message: "Carrito guardado" });
});

export default router;

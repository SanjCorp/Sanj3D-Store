import express from "express";
import Product from "../models/Product.js";
import CustomQuote from "../models/CustomQuote.js"; // Nuevo modelo
const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new product (solo admin si quieres)
router.post("/", async (req, res) => {
  const product = new Product(req.body);
  try {
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// POST new custom quote
router.post("/custom-quote", async (req, res) => {
  const quote = new CustomQuote(req.body);
  try {
    const savedQuote = await quote.save();
    res.status(201).json(savedQuote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;

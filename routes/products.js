import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// Obtener todos los productos
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Agregar un nuevo producto
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;

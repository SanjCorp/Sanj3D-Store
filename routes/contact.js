// routes/contact.js

import express from "express";
import Contact from "../models/contact.js";

const router = express.Router();

// POST /api/v1/contact
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    console.error("Error al guardar contacto:", error);
    res.status(500).json({ success: false, message: "Error al guardar el mensaje" });
  }
});

export default router;

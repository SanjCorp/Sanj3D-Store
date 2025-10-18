const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

// ✅ Ruta para guardar contacto
router.post("/", async (req, res) => {
  try {
    const { nombre, email, tipo, mensaje } = req.body;

    if (!nombre || !email || !mensaje) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const nuevoContacto = new Contact({ nombre, email, tipo, mensaje });
    await nuevoContacto.save();

    res.status(201).json({ message: "Contact saved successfully!" });
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(500).json({ message: "Error saving contact." });
  }
});

// ✅ Ruta para verificar contactos guardados (GET)
router.get("/", async (req, res) => {
  try {
    const contactos = await Contact.find();
    res.json(contactos);
  } catch (err) {
    res.status(500).json({ message: "Error getting contacts." });
  }
});

module.exports = router;

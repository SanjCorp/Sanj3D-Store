// frontend/routes/contact.js
import express from "express";
import Contact from "../models/contact.js";

const router = express.Router();

// POST: guardar mensaje
router.post("/", async (req, res) => {
  try {
    const { nombre, email, tipo, mensaje } = req.body;

    if (!nombre || !email || !mensaje) {
      return res.status(400).json({ message: "Campos requeridos faltantes" });
    }

    const newContact = new Contact({ nombre, email, tipo, mensaje });
    await newContact.save();

    res.status(201).json({ message: "Mensaje guardado exitosamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error del servidor" });
  }
});

// GET: obtener todos los mensajes (opcional)
router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ fecha: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

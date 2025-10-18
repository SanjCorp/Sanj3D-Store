import express from "express";
import Contact from "../models/contact.js";

const router = express.Router();

// POST: guardar mensaje
router.post("/", async (req, res) => {
  try {
    const { nombre, email, tipo, mensaje } = req.body;
    const nuevo = new Contact({ nombre, email, tipo, mensaje });
    await nuevo.save();
    res.status(201).json({ success: true, message: "Mensaje guardado" });
  } catch (err) {
    console.error("❌ Error al guardar contacto:", err);
    res.status(500).json({ success: false, error: "Error al guardar el mensaje" });
  }
});

// GET: listar mensajes guardados
router.get("/", async (req, res) => {
  try {
    const mensajes = await Contact.find();
    res.status(200).json(mensajes);
  } catch (err) {
    res.status(500).json({ success: false, error: "Error al obtener los mensajes" });
  }
});

export default router;

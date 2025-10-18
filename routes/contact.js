import express from "express";
import Contact from "../models/contact.js";

const router = express.Router();

// GET: obtener todos los contactos
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: guardar un nuevo contacto
router.post("/", async (req, res) => {
  const { name, email, projectType, requestDetails } = req.body;
  try {
    const newContact = new Contact({ name, email, projectType, requestDetails });
    await newContact.save();
    res.status(201).json({ message: "✅ Contacto guardado correctamente", contact: newContact });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;

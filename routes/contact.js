import express from "express";
import Contact from "../models/contact.js";

const router = express.Router();

// GET todos los contactos
router.get("/", async (req, res) => {
  try {
    const contactos = await Contact.find();
    res.json(contactos); // <- importante, JSON, no renderizar HTML
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST un nuevo contacto
router.post("/", async (req, res) => {
  const { nombre, email, tipo, mensaje } = req.body;
  const newContact = new Contact({ nombre, email, tipo, mensaje });

  try {
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;

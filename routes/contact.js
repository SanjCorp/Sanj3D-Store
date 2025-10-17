import express from "express";
import Contact from "../models/contact.js";

const router = express.Router();

// Guardar un contacto (POST)
router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Obtener todos los contactos (GET)
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

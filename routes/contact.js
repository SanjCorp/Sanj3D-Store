import express from "express";
import Contact from "../models/contact.js";

const router = express.Router();

// GET all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new contact
router.post("/", async (req, res) => {
  const contact = new Contact({
    nombre: req.body.nombre,
    email: req.body.email,
    tipo: req.body.tipo,
    mensaje: req.body.mensaje,
  });

  try {
    const newContact = await contact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;

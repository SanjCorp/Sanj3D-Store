import express from "express";
import Contact from "../models/contact.js"; // tu modelo de MongoDB

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, email, type, message, date } = req.body;
    const newContact = new Contact({ name, email, type, message, date });
    await newContact.save();
    res.status(201).json({ message: "Request saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;

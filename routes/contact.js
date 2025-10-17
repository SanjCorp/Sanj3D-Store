import express from "express";
import Contact from "../models/contact.js";

const router = express.Router();

// Submit contact form
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;

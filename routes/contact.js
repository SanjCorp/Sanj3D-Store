import express from "express";
import Contact from "../models/contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const newContact = new Contact(req.body);
  await newContact.save();
  res.json({ message: "Mensaje enviado" });
});

export default router;

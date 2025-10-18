import express from "express";
import Contact from "../models/contact.js";

const router = express.Router();

/**
 * @swagger
 * /contact:
 *   get:
 *     summary: Obtener todas las solicitudes de contacto
 *     responses:
 *       200:
 *         description: Lista de contactos
 *   post:
 *     summary: Registrar nueva solicitud de contacto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               email:
 *                 type: string
 *               tipo:
 *                 type: string
 *               mensaje:
 *                 type: string
 *             required:
 *               - nombre
 *               - email
 *               - tipo
 *               - mensaje
 *     responses:
 *       201:
 *         description: Solicitud registrada correctamente
 *       400:
 *         description: Faltan campos requeridos
 */

router.get("/", async (req, res) => {
  try {
    const contactos = await Contact.find();
    res.json(contactos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  const { nombre, email, tipo, mensaje } = req.body;

  if (!nombre || !email || !tipo || !mensaje) {
    return res.status(400).json({ error: "Todos los campos son requeridos" });
  }

  try {
    const newContact = new Contact({ nombre, email, tipo, mensaje });
    await newContact.save();
    res.status(201).json({ message: "Solicitud registrada correctamente", contact: newContact });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

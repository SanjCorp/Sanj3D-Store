// server/index.js

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import productsRoute from "../routes/products.js";
import contactRoute from "../routes/contact.js";
import cartRoute from "../routes/cart.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/products", productsRoute);
app.use("/api/v1/contact", contactRoute);
app.use("/api/v1/cart", cartRoute);

// Root test route
app.get("/", (req, res) => {
  res.send("✅ Sanj3D Store API funcionando correctamente.");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Conectado a MongoDB");
    app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
  })
  .catch((err) => console.error("❌ Error al conectar a MongoDB:", err));

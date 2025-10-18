// frontend/server/index.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import contactRoutes from "../../routes/contact.js";
import productRoutes from "../../routes/products.js";
import cartRoutes from "../../routes/cart.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas API
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/contact", contactRoutes);

// Servir frontend
app.use(express.static("frontend"));

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch(err => console.error("❌ Error de conexión:", err));

app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import productRoutes from "./routes/products.js";
import orderRoutes from "./routes/orders.js";
import usuarioRoutes from "./routes/usuarios.js"; // ✅ nueva ruta

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas de API
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/usuarios", usuarioRoutes); // ✅ nueva ruta

// Variables para manejar __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir carpeta frontend como estática
app.use(express.static(path.join(__dirname, "frontend")));

// Ruta principal y fallback para SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

// Conexión a MongoDB y arranque del servidor
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Conectado a MongoDB Atlas");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
    });
  })
  .catch((err) => console.error("❌ Error al conectar MongoDB:", err));

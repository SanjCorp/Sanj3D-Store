import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import productRoutes from "./routes/products.js";
import orderRoutes from "./routes/orders.js";
import usuariosRoutes from "./routes/usuarios.js";
import ordersRouter from "./routes/orders.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/products", productRoutes);
app.use("/api/orders", ordersRouter);
app.use("/api/usuarios", usuariosRoutes); // <-- nueva ruta

// __dirname setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir frontend
app.use(express.static(path.join(__dirname, "frontend")));

// Fallback para SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

// MongoDB + server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Conectado a MongoDB Atlas");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
  })
  .catch(err => console.error("❌ Error al conectar MongoDB:", err));

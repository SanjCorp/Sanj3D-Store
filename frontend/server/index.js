import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import contactRoutes from "../../routes/usuarios.js";
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

// Swagger (Opcional)
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Sanj3D Store API", version: "1.0.0" },
    servers: [{ url: "https://sanj3d-store.onrender.com/api/v1" }],
  },
  apis: ["../../routes/*.js"],
};
const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Servir frontend estático
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../"))); // apunta a la carpeta que contiene usuario.html

// Ruta explícita para la página de usuario
app.get("/usuario", (req, res) => {
  res.sendFile(path.join(__dirname, "../usuario.html"));
});

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch(err => console.error("❌ Error de conexión:", err));

app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));

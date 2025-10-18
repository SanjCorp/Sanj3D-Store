const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Rutas API
app.use("/api/v1/products", require("../../routes/products"));
app.use("/api/v1/cart", require("../../routes/cart"));
app.use("/api/v1/contact", require("../../routes/contact"));

// Servir archivos del frontend
app.use(express.static(path.join(__dirname, "../")));

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch((err) => console.error("❌ Error de conexión a MongoDB:", err));

// Puerto y arranque
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));

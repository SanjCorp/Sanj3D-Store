import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import productRoutes from "../routes/products.js";
import cartRoutes from "../routes/cart.js";
import contactRoutes from "../routes/contact.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/contact", contactRoutes);

// Static frontend
app.use(express.static("frontend"));

// Catch-all para SPA (opcional, solo para frontend, después de las rutas API)
app.get("*", (req, res) => {
  res.sendFile(`${process.cwd()}/frontend/index.html`);
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Conectado a MongoDB Atlas"))
.catch((err) => console.error("❌ Error de conexión a MongoDB:", err));

app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));

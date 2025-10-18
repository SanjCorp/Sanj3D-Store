import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  tipo: { type: String, required: true },
  mensaje: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Usuario", usuarioSchema);

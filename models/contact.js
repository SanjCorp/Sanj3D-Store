import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  tipo: { type: String },
  mensaje: { type: String, required: true },
  fecha: { type: Date, default: Date.now }
});

export default mongoose.model("Contact", contactSchema);

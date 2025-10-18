import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  type: { type: String, required: true },
  details: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("Usuario", usuarioSchema);

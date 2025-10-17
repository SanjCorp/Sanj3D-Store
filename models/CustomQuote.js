import mongoose from "mongoose";

const customQuoteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  urgent: { type: Boolean, default: false },
  description: { type: String, required: true, maxlength: 300 },
  fileUrl: { type: String, required: true }, // link al STL subido
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("CustomQuote", customQuoteSchema);

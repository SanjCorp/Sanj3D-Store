// app.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Order from './models/Order.js'; // asegúrate de poner .js

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Rutas
app.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching orders' });
  }
});

app.post('/api/orders', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ error: 'Error creating order' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
